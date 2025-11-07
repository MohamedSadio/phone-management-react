import React from 'react';
import Wishlist from '../common/Wishlist';
import AccountIcon from '../common/AccountIcon';
import { NavLink, useNavigate } from 'react-router-dom';
import LogOutIcon from '../common/LogOutIcon';

function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprime l'utilisateur connecté du localStorage
    localStorage.removeItem('utilisateurConnecte');
    // Redirige vers la page de login
    navigate('/login');
  };

  return (
    <div>
      <nav className='flex items-center py-6 px-16 justify-between gap-20 custom-nav'>
        <div className='flex items-center gap-6'>
          <a className="text-3xl text-black font-bold gap-8" href="/app">SmartShop</a>
        </div>
        <div className='flex flex-wrap items-center gap-10'>
          <ul className='flex gap-14 text-gray-600 hover:text-black'>
            <li><NavLink to='/allPhones'> All phones</NavLink></li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <div className='border rounded flex overflow-hidden'>
            <div className='flex items-center justify-center px-4 border-1'>
              <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
              <input type="text" className="px-4 py-2 outline-none" placeholder="Search"/>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center gap-4'>
          <ul className='flex gap-8'>
            <li><button><Wishlist/></button></li>
            <li><button><AccountIcon/></button></li>
            <li className='pt-2'>
              <button onClick={handleLogout}>
                <LogOutIcon />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
