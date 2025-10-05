import axios from "axios";

// Task 1: fetch single user by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Task 2: fetch multiple users with advanced filters
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  // API returns items array
  const users = response.data.items || [];

  // fetch detailed info for each user (location, public_repos)
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
      return userDetails.data;
    })
  );

  return detailedUsers;
};
