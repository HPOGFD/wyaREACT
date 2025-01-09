// TODO: Create an interface for the Candidate objects returned by the API
// Interface to define the structure of the CandidateDetails object
export interface CandidateDetails {
    avatar_url: string; // URL of the user's avatar image
    login: string;      // GitHub username
    name: string;       // Full name of the user
    location: string;   // User's location (city, state, or country)
    email: string;      // Email address associated with the user's GitHub profile
    company: string;    // Company the user is associated with, if any
    bio: string;        // Short biography or description about the user
  }
  