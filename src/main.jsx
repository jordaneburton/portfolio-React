import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
// Import our custom CSS
import './scss/styles.scss'

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <GamePage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'About',
        element: <AboutPage />,
      },
      {
        path: 'Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'Resume',
        element: <ResumePage />,
      },
      {
        path: 'Contact',
        element: <ContactPage />,
      },
      {
        path: 'Game',
        element: <GamePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
