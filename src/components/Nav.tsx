// Import the Link component from react-router-dom to handle navigation
import { Link } from 'react-router-dom';

// Functional component that represents the navigation menu
const Nav = () => {
  return (
    // Unordered list styled with a "nav" class to structure the navigation
    <ul className="nav">
      
      {/* Navigation item for the "Home" page */}
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>

      {/* Navigation item for the "Potential Candidates" page */}
      <li className="nav-item">
        <Link className="nav-link" to="/SavedCandidates">
          Potential Candidates
        </Link>
      </li>
    </ul>
  );
};

// Export the Nav component for use in other parts of the application
export default Nav;
