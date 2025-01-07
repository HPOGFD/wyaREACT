import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <ul className="nav">
    <li className="nav-item">
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/SavedCandidates">Potential Candidates</Link>
    </li>
    
</ul>
  )
};

export default Nav;


