import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Smartphone, ShoppingCart, User, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">À propos</h3>
            <p className="text-gray-300 mb-4">
              SmartShop est votre destination pour tous vos besoins en smartphones. 
              Nous offrons une large gamme de produits de qualité avec un service client exceptionnel.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Navigation</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Home size={16} className="mr-2" />
                <Link to="/" className="text-gray-300 hover:text-white transition">Accueil</Link>
              </li>
              <li className="flex items-center">
                <Smartphone size={16} className="mr-2" />
                <Link to="/smartphones" className="text-gray-300 hover:text-white transition">Smartphones</Link>
              </li>
              <li className="flex items-center">
                <ShoppingCart size={16} className="mr-2" />
                <Link to="/panier" className="text-gray-300 hover:text-white transition">Panier</Link>
              </li>
              <li className="flex items-center">
                <User size={16} className="mr-2" />
                <Link to="/connexion" className="text-gray-300 hover:text-white transition">Connexion</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Marques</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/smartphones/samsung" className="text-gray-300 hover:text-white transition">Samsung</Link>
              </li>
              <li>
                <Link to="/smartphones/apple" className="text-gray-300 hover:text-white transition">Apple</Link>
              </li>
              <li>
                <Link to="/smartphones/xiaomi" className="text-gray-300 hover:text-white transition">Xiaomi</Link>
              </li>
              <li>
                <Link to="/smartphones/huawei" className="text-gray-300 hover:text-white transition">Huawei</Link>
              </li>
              <li>
                <Link to="/smartphones/google" className="text-gray-300 hover:text-white transition">Google</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@smartshop.com" className="text-gray-300 hover:text-white transition">contact@smartshop.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+221123456789" className="text-gray-300 hover:text-white transition">+221 12 345 67 89</a>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-md font-medium mb-2">Restez informé</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="px-3 py-2 w-full text-gray-800 rounded-l focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>
        
        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold">Smart<span className="text-blue-500">Shop</span></Link>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} SmartShop. Tous droits réservés.</p>
            <p className="mt-1">Projet React JS & Tailwind CSS - ESMT/MPSI-ISI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;