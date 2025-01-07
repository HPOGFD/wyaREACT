import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { CandidateDetails } from '../interfaces/Candidate.interface'; // Assuming this file is in a folder called 'interfaces'

const CandidateSearch = () => {
  // State to store the list of users and a single user searched
  const [users, setUsers] = useState<CandidateDetails[]>([]);
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<CandidateDetails | null>(null);
  const [error, setError] = useState<string>('');

  // Fetch a list of users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await searchGithub();
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  // Handle search for a specific user by username
  const handleSearch = async () => {
    if (username.trim()) {
      setError('');
      const userData = await searchGithubUser(username);
      console.log(userData);
      // Check if the fetched user has data
      if (userData?.login) {
        setUser({
          avatar_url: userData.avatar_url,
          login: userData.login,
          name: userData.name || '',
          location: userData.location || '',
          email: userData.email || '',
          company: userData.company || '',
          bio: userData.bio || ''
        });
      } else {
        setError('User not found');
      }
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search GitHub user by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {/* Display searched user details */}
      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} alt={user.login} width={100} height={100} />
          <p>{user.bio}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company}</p>
        </div>
      )}

      {/* Display list of users */}
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <h3>{user.login}</h3>
              <img src={user.avatar_url} alt={user.login} width={50} height={50} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CandidateSearch;
