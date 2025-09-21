import axios from "axios";

// Task 1: single user search
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Task 2: advanced search
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query.trim()}`
  );
  return response.data.items; // array of users
};
