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
      <ul>
        {savedCandidates.length > 0 ? (
          savedCandidates.map((candidate) => (
            <li key={candidate.login}>
              <h3>{candidate.login}</h3>
              <img src={candidate.avatar_url} alt={candidate.login} width={50} height={50} />
            </li>
          ))
        ) : (
          <p>No candidates saved.</p>
        )}
      </ul>
    </div>
  );
};

export default SavedCandidates;
