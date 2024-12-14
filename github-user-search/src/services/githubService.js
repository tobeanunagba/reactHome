import axios from 'axios';

// Function to fetch a single GitHub user by username
const fetchGitHubUser  = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Propagate the error to the calling function
  }
};

// Function to perform an advanced search for GitHub users
const fetchAdvancedGitHubUsers = async (username, location, minRepos) => {
  try {
    // Construct the query string based on provided parameters
    let query = `type:user`;
    if (username) query += `+${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data; // This will return an object containing items and other metadata
  } catch (error) {
    console.error("Error fetching advanced user data:", error);
    throw error; // Propagate the error to the calling function
  }
};

export { fetchGitHubUser , fetchAdvancedGitHubUsers };