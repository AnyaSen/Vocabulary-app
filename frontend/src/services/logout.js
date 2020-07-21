import axios from "axios";

export const logout = async () => {
  const usersURL = "/users/logout";
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`
  };
  try {
    const result = await axios.post(usersURL, { headers });
    localStorage.removeItem("token");

    return result;
  } catch (error) {
    throw Error(error);
  }
};

export const logoutAll = async () => {
  const usersURL = "/users/logoutAll";
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`
  };
  try {
    const result = await axios.post(usersURL, { headers });
    localStorage.removeItem("token");

    return result;
  } catch (error) {
    throw Error(error);
  }
};
