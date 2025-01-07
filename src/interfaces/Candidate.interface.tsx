// TODO: Create an interface for the Candidate objects returned by the API
export interface CandidateDetails {
    avatar_url: string; // User's avatar image
    login: string;      // GitHub username
    name: string;       // Full name
    location: string;   // User's location
    email: string;      // Email address
    company: string;    // Company user works at
    bio: string;        // User bio
  }
  