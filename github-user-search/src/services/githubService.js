import axios from "axios";

const BASE_URL = "https://api.github.com/users";

// function required by assignment
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};
