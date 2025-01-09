// Import necessary dependencies
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the app
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import router-related functions
import './index.css'; // Import global styles

// Import components and pages
import App from './App.tsx';
import CandidateSearch from './pages/CandidateSearch.tsx';
import SavedCandidates from './pages/SavedCandidates.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

// Create the router with route configurations
const router = createBrowserRouter([
  {
    path: '/', // Set the base route to '/'
    element: <App />, // The App component will render at this route
    errorElement: <ErrorPage />, // Specify the error page to render for errors in routes
    children: [
      {
        index: true, // The default index route for '/'
        element: <CandidateSearch />, // Render the CandidateSearch component by default
      },
      {
        path: '/SavedCandidates', // Define route for '/SavedCandidates'
        element: <SavedCandidates />, // Render the SavedCandidates component
      },
    ],
  },
]);

// Get the root DOM element to render the app into
const rootElement = document.getElementById('root');

// If the root element exists, render the RouterProvider with the configured router
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
