import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, LogIn } from 'lucide-react';

const Login = () => {
  const [nom, setNom] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState('');
  const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
  const navigate = useNavigate();

  // Fonction handleLogin originale, non modifiée
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://phone-management-dummy-backend.onrender.com/utilisateurs');
      const data = await response.json();

      if (data.length > 0) {
        const user = data[0];
        // Enregistre l'utilisateur dans le localStorage
        localStorage.setItem('utilisateurConnecte', JSON.stringify(user));
        navigate('/app');
      } else {
        setErreur('Nom ou mot de passe incorrect.');
      }
    } catch (err) {
      console.error(err);
      setErreur('Erreur lors de la connexion.');
    }
  };

  const basculerAffichageMotDePasse = () => {
    setAfficherMotDePasse(!afficherMotDePasse);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Connexion</h2>
          <p className="mt-2 text-sm text-gray-600">
            Entrez vos identifiants pour accéder à votre compte
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                Nom d'utilisateur
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre nom d'utilisateur"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={afficherMotDePasse ? "text" : "password"}
                  required
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre mot de passe"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={basculerAffichageMotDePasse}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {afficherMotDePasse ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {erreur && (
            <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
              {erreur}
            </div>
          )}

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-700">
              Se souvenir de moi
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
              </span>
              Se connecter
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Vous n'avez pas de compte?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;