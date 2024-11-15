// React imports --------------------------------

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';

// Asset imports --------------------------------

import './index.css'

// Module imports -------------------------------

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Component imports ----------------------------

import App from './App.tsx'

// Loader imports -------------------------------

import { blogPostsLoader } from './loaders/blogPostsLoader.ts';

// Page imports ---------------------------------

import HomePage from './routes/HomePage.tsx';
import RootPage from './routes/RootPage.tsx';
import AboutPage from './routes/AboutPage.tsx';
import ContactPage from './routes/ContactPage.tsx';
import BlogPage from "./routes/BlogPage.tsx";

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
  }, 
  {
    text: "Blog", 
    path: "/blog", 
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
        element: <ContactPage />
      }, 
      {
        path: "/blog", 
        element: <BlogPage />, 
        loader: blogPostsLoader
      }
      
    ]
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={defaultBrowserRouter}/>
  </StrictMode>,
)
