import axios from "axios";

const SEARCH_URL = "https://api.github.com/search/users";

// Advanced search: username + location + repo count
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(`${SEARCH_URL}?q=${query.trim()}`);
  return response.data;
};
