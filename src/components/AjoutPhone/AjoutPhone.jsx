import React, { useState } from 'react';
import axios from 'axios';

const AjoutPhone = ({ onSmartphoneAdded }) => {
  // État pour les champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    description: '',
    price: '',
    ram: '',
    rom: '',
    ecran: '',
    imageUrl: ''
  });
  
  // État pour les couleurs
  const [couleur, setCouleur] = useState('');
  const [couleursDisponibles, setCouleursDisponibles] = useState([]);
  
  // État pour le statut de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  // Gestion du changement des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Gestion des couleurs
  const handleCouleurChange = (e) => {
    setCouleur(e.target.value);
  };

  const ajouterCouleur = () => {
    if (couleur.trim()) {
      setCouleursDisponibles([...couleursDisponibles, couleur.trim()]);
      setCouleur('');
    }
  };

  const supprimerCouleur = (index) => {
    const newColors = [...couleursDisponibles];
    newColors.splice(index, 1);
    setCouleursDisponibles(newColors);
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    
    // Création de l'objet smartphone à envoyer
    const newSmartphone = {
      ...formData,
      // Conversion du prix de FCFA en centimes
      price: parseInt(formData.price) * 100,
      couleursDisponibles: couleursDisponibles
    };
    
    // Envoi à l'API
    axios.post('http://localhost:3001/smartphones', newSmartphone)
      .then(response => {
        setSubmitStatus({ 
          success: true, 
          message: 'Smartphone ajouté avec succès!' 
        });
        
        // Réinitialisation du formulaire
        setFormData({
          name: '',
          brand: '',
          description: '',
          price: '',
          ram: '',
          rom: '',
          ecran: '',
          imageUrl: ''
        });
        setCouleursDisponibles([]);
        
        // Notification au composant parent
        if (onSmartphoneAdded) {
          onSmartphoneAdded(response.data);
        }
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du smartphone:', error);
        setSubmitStatus({ 
          success: false, 
          message: 'Erreur lors de l\'ajout du smartphone. Veuillez réessayer.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className='p-4 border-r bg-gray-50 w-1/4'>
      <h2 className='text-xl font-bold mb-4'>Ajouter un téléphone</h2>
      
      {/* Message de statut */}
      {submitStatus.message && (
        <div className={`mb-4 p-2 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Nom</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Marque</label>
          <input
            type='text'
            name='brand'
            value={formData.brand}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            rows='2'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Prix (en FCFA)</label>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>RAM</label>
          <input
            type='text'
            name='ram'
            value={formData.ram}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            placeholder='Ex: 8 Go'
            required
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Stockage</label>
          <input
            type='text'
            name='rom'
            value={formData.rom}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            placeholder='Ex: 128 Go'
            required
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Écran</label>
          <input
            type='text'
            name='ecran'
            value={formData.ecran}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            placeholder='Ex: 6.1 pouces'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>URL de l'image</label>
          <input
            type='text'
            name='imageUrl'
            value={formData.imageUrl}
            onChange={handleInputChange}
            className='w-full p-2 border rounded'
            placeholder='/images/votre-image.jpg'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Couleurs disponibles</label>
          <div className='flex items-center space-x-2'>
            <input
              type='text'
              value={couleur}
              onChange={handleCouleurChange}
              className='w-full p-2 border rounded'
              placeholder='Ajouter une couleur'
            />
            <button
              type='button'
              onClick={ajouterCouleur}
              className='px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              +
            </button>
          </div>
          <div className='flex flex-wrap gap-2 mt-2'>
            {couleursDisponibles.map((couleur, index) => (
              <div key={index} className='flex items-center bg-gray-200 rounded px-2 py-1'>
                <span>{couleur}</span>
                <button
                  type='button'
                  onClick={() => supprimerCouleur(index)}
                  className='ml-2 text-red-500 hover:text-red-700'
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button
            type='submit'
            disabled={isSubmitting}
            className={`px-4 py-2 ${isSubmitting ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white rounded`}
          >
            {isSubmitting ? 'Ajout en cours...' : 'Ajouter le téléphone'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AjoutPhone;