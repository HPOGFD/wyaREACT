import { useState, useEffect } from 'react';
import { CandidateDetails } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<CandidateDetails[]>([]);

  useEffect(() => {
    // Retrieve saved candidates from localStorage
    const storedSavedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedSavedCandidates);
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img
                    src={candidate.avatar_url}
                    alt={`${candidate.login}'s avatar`}
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                </td>
                <td>{candidate.login}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>
                  <a href={`mailto:${candidate.email || ''}`}>
                    {candidate.email || 'N/A'}
                  </a>
                </td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates saved.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
