import React, { useEffect, useState } from 'react';
import PhoneCard from '../../components/Card/PhoneCard';
import AjoutPhone from '../../components/AjoutPhone/AjoutPhone';
import axios from 'axios';

const AllPhonePage = () => {
  const [smartPhoneListItems, setSmartPhoneListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour charger les smartphones depuis l'API
  const loadSmartphones = () => {
    setIsLoading(true);
    axios.get('http://localhost:3001/smartphones')
      .then(res => {
        const smartphones = res.data;
        setSmartPhoneListItems(smartphones);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Erreur lors de la récupération des smartphones:", err);
        setError(err);
        setIsLoading(false);
      });
  };

  // Chargement des smartphones au montage du composant
  useEffect(() => {
    loadSmartphones();
  }, []);

  // Fonction pour gérer l'ajout d'un nouveau smartphone
  const handleSmartphoneAdded = (newSmartphone) => {
    setSmartPhoneListItems(prevItems => [...prevItems, newSmartphone]);

  };

  // Vérifier si l'utilisateur est admin
  const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
  const isAdmin = utilisateurConnecte?.role === 'admin';

  // Affichage en cas de chargement
  if (isLoading && smartPhoneListItems.length === 0) {
    return <div className="p-8 text-center">Chargement des smartphones...</div>;
  }

  // Affichage en cas d'erreur
  if (error && smartPhoneListItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600 font-bold">Erreur de chargement</p>
        <p>Impossible de récupérer la liste des smartphones.</p>
        <button 
          onClick={loadSmartphones}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-row'>
        {isAdmin && (
          <AjoutPhone onSmartphoneAdded={handleSmartphoneAdded} />
        )}
        <div className='p-4 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {smartPhoneListItems?.map((item, index) => (
            <PhoneCard key={index} {...item} />
          ))}
          
          {smartPhoneListItems?.length === 0 && !isLoading && (
            <div className="col-span-4 text-center py-8">
              <p className="text-gray-500">Aucun smartphone disponible</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllPhonePage;