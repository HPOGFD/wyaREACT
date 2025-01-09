// Function to fetch a list of GitHub users starting from a random user ID
const searchGithub = async () => {
  try {
    // Generate a random starting ID
    const start = Math.floor(Math.random() * 100000000) + 1;

    // Log environment variables to debug issues with the token
    console.log(import.meta.env);

    // Fetch GitHub users starting from the randomly generated ID
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          // Add the authorization header using the token from environment variables
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    // Log the full response for debugging purposes
    console.log('Response:', response);

    // Parse the response as JSON
    const data = await response.json();

    // Check if the response status is not OK and throw an error
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }

    // Log the parsed data for debugging
    console.log('Data:', data);

    // Return the parsed data
    return data;
  } catch (err) {
    // Log any error that occurs during the fetch or parsing process
    console.log('an error occurred', err);

    // Return an empty array in case of an error
    return [];
  }
};

// Function to fetch detailed information about a specific GitHub user by username
const searchGithubUser = async (username: string) => {
  try {
    // Fetch details of the user with the provided username
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        // Add the authorization header using the token from environment variables
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    // Parse the response as JSON
    const data = await response.json();

    // Check if the response status is not OK and throw an error
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }

    // Return the parsed user data
    return data;
  } catch (err) {
    // Log any error that occurs during the fetch or parsing process
    console.log('an error occurred', err);

    // Return an empty object in case of an error
    return {};
  }
};

// Export the functions to be used in other modules
export { searchGithub, searchGithubUser };
