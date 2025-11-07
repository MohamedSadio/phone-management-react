import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PhoneDetailPage = () => {
  const { phoneId } = useParams();
  const navigate = useNavigate();
  const [smartphone, setSmartphone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Récupération des données avec axios
    axios.get(`http://localhost:3001/smartphones/${phoneId}`)
      .then(res => {
        setSmartphone(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Erreur lors de la récupération du smartphone:", err);
        setError(err);
        setIsLoading(false);
      });
  }, [phoneId]);

  // Si les données sont en cours de chargement
  if (isLoading) {
    return <div className="p-8 text-center">Chargement en cours...</div>;
  }

  // Si une erreur s'est produite
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Erreur</h2>
        <p className="text-lg mb-6">Une erreur s'est produite lors du chargement des données.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retour
        </button>
      </div>
    );
  }

  // Handle case when smartphone is not found
  if (!smartphone) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Smartphone non trouvé</h2>
        <p className="text-lg mb-6">Nous n'avons pas pu trouver un smartphone avec l'ID {phoneId}.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retour
        </button>
      </div>
    );
  }

  // Fonction pour formater le prix (de centimes à euros avec séparateur de milliers)
  const formatPrice = (priceInCents) => {
    return (priceInCents / 100).toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bouton Retour */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </button>
      </div>

      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image du smartphone */}
        <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-50">
          {smartphone.imageUrl ? (
            <img
              src={smartphone.imageUrl}
              className="h-auto max-h-96 w-full object-contain"
              alt={smartphone.name}
            />
          ) : (
            <div className="h-96 w-full flex items-center justify-center bg-gray-200 rounded-xl">
              <p>Image non disponible</p>
            </div>
          )}
        </div>

        {/* Informations du smartphone */}
        <div className="md:w-1/2 p-6">
          <div className="mb-2 text-sm font-semibold text-black uppercase tracking-wider">
            {smartphone.brand}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{smartphone.name}</h1>
          
          {smartphone.price && (
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              {formatPrice(smartphone.price)}
            </p>
          )}
          
          {smartphone.description && (
            <div className="mb-6">
              <p className="text-gray-600">{smartphone.description}</p>
            </div>
          )}
          
          {/* Caractéristiques techniques */}
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-semibold mb-3">Caractéristiques techniques</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {smartphone.ecran && (
                <div>
                  <span className="text-gray-500 font-medium">Écran:</span>
                  <p className="text-gray-800">{smartphone.ecran}</p>
                </div>
              )}
              
              {smartphone.ram && (
                <div>
                  <span className="text-gray-500 font-medium">Mémoire RAM:</span>
                  <p className="text-gray-800">{smartphone.ram}</p>
                </div>
              )}
              
              {smartphone.rom && (
                <div>
                  <span className="text-gray-500 font-medium">Stockage:</span>
                  <p className="text-gray-800">{smartphone.rom}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Couleurs disponibles */}
          {smartphone.couleursDisponibles && smartphone.couleursDisponibles.length > 0 && (
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h2 className="text-lg font-semibold mb-3">Couleurs disponibles</h2>
              <div className="flex flex-wrap gap-2">
                {smartphone.couleursDisponibles.map((couleur, index) => (
                  <span 
                    key={index} 
                    className="px-5 py-1 bg-gray-100 text-gray-800 rounded-full text-sm cursor-pointer"
                  >
                    {couleur}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailPage;