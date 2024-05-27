import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home.jsx';
import Donasiku from './pages/Donasiku.jsx';
import Tentang from './pages/Tentang.jsx';
import ErorrPage from './pages/404.jsx';
import FormulirDonatur from './pages/FormulirDonatur.jsx';
import FormulirMitra from './pages/FormulirMitra.jsx';
import Berita from './pages/Berita.jsx';
import FullArticle from './pages/FullArticle.jsx';




const router = createBrowserRouter([
  {
    path: "*",
    element: <ErorrPage/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/donasiku",
    element: <Donasiku />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/berita",
    element: <Berita />,
  },
  {
    path: "/formulir-donatur",
    element: <FormulirDonatur />,
  },
  {
    path: "/formulir-mitra",
    element: <FormulirMitra />,
  },
  {
    path: "/article/:id",
    element: <FullArticle />,
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
