import axios from "axios";

// Function must be named fetchUserData for the tester
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
