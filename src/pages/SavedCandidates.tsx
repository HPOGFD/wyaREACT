// Import necessary dependencies, including React hooks, types, and styles.
import { useState, useEffect } from 'react';
import { CandidateDetails } from '../interfaces/Candidate.interface';
import '../styles/red.css'; // Import styles for red buttons
import '../styles/savedCandidates.css'; // New file for the table styles

// Define the SavedCandidates component that will display a table of saved candidates.
const SavedCandidates = () => {
  // State to hold an array of saved candidate details.
  const [savedCandidates, setSavedCandidates] = useState<CandidateDetails[]>([]);

  // useEffect to fetch saved candidates from localStorage when the component mounts.
  useEffect(() => {
    // Retrieve saved candidates from localStorage (parsing it as an array, defaulting to an empty array if not found).
    const storedSavedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedSavedCandidates); // Set the retrieved candidates to the state
  }, []);

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
    <div className="saved-candidates">
      {/* Display a heading for the saved candidates list */}
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        // If candidates are saved, display them in a table.
        <table className="candidate-table">
          <thead>
            <tr>
              {/* Table column headers for displaying candidate information */}
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through the saved candidates and create a row for each */}
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  {/* Display candidate's avatar */}
                  <img
                    src={candidate.avatar_url}
                    alt={`${candidate.login}'s avatar`}
                    className="avatar"
                  />
                </td>
                <td>{candidate.login}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>
                  {/* Display email and link it to the user's mail client */}
                  <a href={`mailto:${candidate.email || ''}`}>
                    {candidate.email || 'N/A'}
                  </a>
                </td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'N/A'}</td>
                <td>
                  {/* Button to reject candidate from saved list */}
                  <button
                    className="reject-button"
                    onClick={() => handleRejectCandidate(candidate)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Display message if no candidates are saved
        <p>No candidates saved.</p>
      )}
    </div>
  );
};

// Export SavedCandidates component for use in other parts of the application.
export default SavedCandidates;
