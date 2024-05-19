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
import Berita from './pages/Berita.jsx';
import ReadMore from './pages/ReadMore.jsx';
import FullArticle from './pages/FullArticle.jsx';


const router = createBrowserRouter([
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
    path: "/Berita",
    element: <Berita/>
  },
  {
    path: "/berita/fuul-article",
    element: <ReadMore/>
  },
  {
    path: "/FullArticle",
    element: <FullArticle/>
  },
  
  
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
