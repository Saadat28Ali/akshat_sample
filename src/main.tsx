// React imports --------------------------------

import { FunctionComponent, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Asset imports --------------------------------

import './index.css'

// Module imports -------------------------------

import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

// Component imports ----------------------------

import App from './App.tsx'

// Page imports ---------------------------------

import HomePage from './routes/HomePage.tsx';
import RootPage from './routes/Root.tsx';
import AboutPage from './routes/About.tsx';
import Contact from './routes/Contact.tsx';

// ----------------------------------------------

const navlinks = [
  {
    text: "Home",
    path: "/home"
  }, 
  {
    text: "About",
    path: "/about"
  }, 
  {
    text: "Contact",
    path: "/contact"
  }
];

const defaultBrowserRouter = createBrowserRouter([
  {
    path: "/", 
    element: <App navlinks={navlinks}/>, 
    children: [
      {
        path: "/", 
        element: <RootPage />
      }, 
      {
        path: "/home", 
        element: <HomePage />
      }, 
      {
        path: "/about", 
        element: <AboutPage />
      }, 
      {
        path: "/contact", 
        element: <Contact />
      }
      
    ]
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={defaultBrowserRouter}/>
  </StrictMode>,
)
