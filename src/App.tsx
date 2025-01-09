// Import necessary dependencies and components
import { Outlet } from 'react-router-dom'; // Import Outlet to render nested routes
import Nav from './components/Nav'; // Import the Nav component for the navigation bar

function App() {
  return (
    <>
      {/* Render the Nav component for navigation */}
      <Nav />

      {/* Main content area that will render the matched route components */}
      <main>
        <Outlet /> {/* This will display the content of nested routes */}
      </main>
    </>
  );
}

export default App; // Export App component for use in other parts of the application
