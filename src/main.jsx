import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Donasiku from './pages/Donasiku.jsx';
import Tentang from './pages/Tentang.jsx';
import ErorrPage from './pages/404.jsx';
import FormulirDonatur from './pages/FormulirDonatur.jsx';
import FormulirMitra from './pages/FormulirMitra.jsx';


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
    path: "/formulir-donatur",
    element: <FormulirDonatur />,
  },
  {
    path: "/formulir-mitra",
    element: <FormulirMitra />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
