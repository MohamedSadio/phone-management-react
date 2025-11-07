import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from './App';
import AllPhonePage from './pages/AllPhonePage/AllPhonePage';
import ShopApplicationWrapper from './pages/ShopApplicationWrapper';
import PhoneDetailPage from './pages/PhoneDetails/PhoneDetailPage';
import { loadPhoneById } from './routes/phone';
import Login from './pages/LoginPage/Login';
import RequireAuth from './routes/RequireAuth';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      // 🔁 Redirection automatique vers /login à l'ouverture
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allPhones",
        element: (
          <RequireAuth>
            <AllPhonePage />
          </RequireAuth>
        ),
      },
      {
        path: "/phoneDetails/:phoneId",
        loader: loadPhoneById,
        element: (
          <RequireAuth>
            <PhoneDetailPage />
          </RequireAuth>
        ),
      },
      {
        path: "/app",
        element: (
          <RequireAuth>
            <App />
          </RequireAuth>
        ),
      },
    ],
  },
]);
