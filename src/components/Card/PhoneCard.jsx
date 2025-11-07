import React from 'react';
import EyeIcon from '../common/EyeIcon';
import DeleteIcon from '../common/DeleteIcon';
import EditIcon from '../common/EditIcon';
import SvgFavourite from '../common/SvgFavourite';
import { Link } from 'react-router-dom';

const PhoneCard = ({ id, name, brand, price, imageUrl }) => {
  const phoneId = id || '';

  // Récupère l'utilisateur connecté depuis le localStorage
  const utilisateurConnecte = JSON.parse(localStorage.getItem('utilisateurConnecte'));
  const isAdmin = utilisateurConnecte?.role === 'admin';

  return (
    <div className='flex flex-col transition-transform duration-300 w-full max-w-xs rounded-2xl shadow-md overflow-hidden bg-white'>
      <div className='relative'>
        <img
          className='h-52 sm:h-64 md:h-72 w-full object-cover'
          src={imageUrl}
          alt={name || "Smartphone"}
        />
        <div className='absolute top-3 right-3'>
          <SvgFavourite />
        </div>
      </div>

      <div className='p-4'>
        <div className='flex justify-between items-center w-full mb-2'>
          <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
          <button className='p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center hover:scale-110 transform'>
            <Link to={`/phoneDetails/${phoneId}`}>
              <EyeIcon />
            </Link>
          </button>
        </div>

        <div className='flex justify-between items-end'>
          <div>
            <p className='text-gray-500 text-sm mb-1'>{brand}</p>
            <p className='text-xl font-bold'>{price} fcfa</p>
          </div>

          {/* Boutons visibles seulement pour les admins */}
          {isAdmin && (
            <div className='flex space-x-2'>
              <button className='hover:scale-110 transform py-2 px-3 rounded-lg text-sm font-medium transition-colors'>
                <DeleteIcon />
              </button>
              <button className='hover:scale-110 transform p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center'>
                <EditIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
