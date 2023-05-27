import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Homepage.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Main from './layout/Main.jsx';
import ApartmentPage from './pages/ApartmentPage.jsx';
import About from "./pages/About.jsx";
import { ErrorPageNotFound } from "./pages/ErrorPageNotFound.jsx";

const HeaderFooterLayout = () => { //définit la structure générale de la page en incluant un Navbar, un Main et un Footer, puis en utilisant la fonction Outlet fournie par React Router, qui permet d'insérer dynamiquement le contenu de chaque page dans le Main.
  return (
  <>
    <Navbar />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
  );
}

const router = createBrowserRouter([ //creation des routes
  { //Chaque route a un chemin d'accès défini dans la propriété path, qui est associé à un élément à afficher dans la propriété element.
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage /> //une page d'accueil
      },
      {
        path: "/flat",
        element: <ApartmentPage /> //une page d'appartement
      },
      {
        path: "/about",
        element: <About /> //une page a propos
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
