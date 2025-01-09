import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the "check" icon for saved candidates
import { TbXboxXFilled } from 'react-icons/tb'; // Import the "X" icon for rejecting candidates
import { searchGithub, searchGithubUser } from '../api/API'; // Import API functions for fetching GitHub data
import { CandidateDetails } from '../interfaces/Candidate.interface'; // Import the CandidateDetails interface
import '../styles/search.css'; // Import custom CSS for styling the component
import '../styles/red.css'; // Red button styles
import '../styles/green.css'; // Green button styles

const CandidateSearch = () => {
  // State variables to manage application data
  const [users, setUsers] = useState<CandidateDetails[]>([]); // List of users fetched from the GitHub API
  const [username, setUsername] = useState<string>(''); // Username input for searching a specific user
  const [user, setUser] = useState<CandidateDetails | null>(null); // Data for a single searched user
  const [error, setError] = useState<string>(''); // Error message if user not found
  const [savedCandidates, setSavedCandidates] = useState<CandidateDetails[]>([]); // List of saved candidates

  // useEffect hook runs when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await searchGithub(); // Fetch a list of users using the API
      setUsers(userData); // Update state with the fetched users
      console.log(userData); // Debug: Log the fetched user data
    };

    // Retrieve saved candidates from localStorage
    const storedSavedCandidates = JSON.parse(
      localStorage.getItem('savedCandidates') || '[]' // Parse stored data or set to an empty array
    );
    setSavedCandidates(storedSavedCandidates); // Initialize state with saved candidates

    fetchUsers(); // Call the function to fetch users
  }, []);

  // Handle searching for a specific user by username
  const handleSearch = async () => {
    if (username.trim()) {
      setError(''); // Clear any previous errors
      const userData = await searchGithubUser(username); // Fetch data for the entered username
      console.log(userData); // Debug: Log the fetched user data
      if (userData?.login) {
        // Check if the user exists
        setUser({
          avatar_url: userData.avatar_url,
          login: userData.login,
          name: userData.name || '', // Default to empty string if no name
          location: userData.location || '', // Default location
          email: userData.email || '', // Default email
          company: userData.company || '', // Default company
          bio: userData.bio || '', // Default bio
        });
      } else {
        setError('User not found'); // Set error if no user is returned
      }
    }
  };

  // Save a user to the saved candidates list
  const handleSaveCandidate = (candidate: CandidateDetails) => {
    const updatedSavedCandidates = [...savedCandidates, candidate]; // Add the user to the saved candidates array
    setSavedCandidates(updatedSavedCandidates); // Update state
    localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates)); // Persist data to localStorage
  };

   // Function to handle rejection of a candidate
   const handleRejectCandidate = (candidate: CandidateDetails) => {
    // Filter out the rejected candidate based on their login ID
    const updatedCandidates = savedCandidates.filter(
      (savedCandidate) => savedCandidate.login !== candidate.login
    );
    setSavedCandidates(updatedCandidates); // Update the state with the new list of candidates

    // Update localStorage to reflect the new list of saved candidates
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      {/* Search Section */}
      <div className="search-container">
        <h1>Candidate Search</h1>
        <input
          type="text"
          placeholder="Search GitHub user by username"
          value={username} // Bind input value to state
          onChange={(e) => setUsername(e.target.value)} // Update state on input change
        />
        <button onClick={handleSearch}>Search</button>
        {error && <p>{error}</p>} {/* Show error message if present */}
      </div>

      {/* Display searched user details */}
      {user && (
        <div className="container">
          <img src={user.avatar_url} alt={user.login} width={100} height={100} /> {/* User avatar */}
          <h3>{user.login}</h3> {/* Username */}
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p>{user.bio}</p>

          {/* Buttons for saving/rejecting the candidate */}
          <div className="button-group">
            {/* Reject button */}
            <button className="red" onClick={() => handleRejectCandidate(user)}>
              <TbXboxXFilled size={24} />
            </button>

            {/* Save button */}
            <button className="green" onClick={() => handleSaveCandidate(user)}>
              <FaCheck size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Display list of users */}
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <h3>{user.login}</h3> {/* Username */}
              <img src={user.avatar_url} alt={user.login} width={50} height={50} /> {/* Avatar */}
              {/* Save button */}
              <button className="green" onClick={() => handleSaveCandidate(user)}>
                <FaCheck size={24} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CandidateSearch;
