import { useState, useEffect } from 'react';
import { CandidateDetails } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<CandidateDetails[]>([]);

  useEffect(() => {
    // Retrieve saved candidates from localStorage
    const storedSavedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedSavedCandidates);
  }, []);

  // Function to handle the rejection of a candidate
  const handleRejectCandidate = (candidate: CandidateDetails) => {
    const updatedCandidates = savedCandidates.filter(
      (savedCandidate) => savedCandidate.login !== candidate.login
    );
    setSavedCandidates(updatedCandidates);

    // Update localStorage with the new list of saved candidates
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table style={{ borderCollapse: 'separate', borderSpacing: '10px' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', textAlign: 'left' }}>Image</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Location</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Company</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Bio</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td style={{ padding: '10px' }}>
                  <img
                    src={candidate.avatar_url}
                    alt={`${candidate.login}'s avatar`}
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                </td>
                <td style={{ padding: '10px' }}>{candidate.login}</td>
                <td style={{ padding: '10px' }}>{candidate.location || 'N/A'}</td>
                <td style={{ padding: '10px' }}>
                  <a href={`mailto:${candidate.email || ''}`}>
                    {candidate.email || 'N/A'}
                  </a>
                </td>
                <td style={{ padding: '10px' }}>{candidate.company || 'N/A'}</td>
                <td style={{ padding: '10px' }}>{candidate.bio || 'N/A'}</td>
                <td style={{ padding: '10px' }}>
                  <button
                    onClick={() => handleRejectCandidate(candidate)} // Reject button handler
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Reject
                  </button>
                </td>
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
