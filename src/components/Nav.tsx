import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/SavedCandidates">Potential Candidates</Link>
      </li>
    </ul>
  )
};

export default Nav;
