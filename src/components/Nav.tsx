import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
       <Link to="/candidate-search">Candidate Search</Link> |{" "}
       <Link to="/saved-candidates">Saved Candidates</Link>
    </div>
  )
};

export default Nav;


