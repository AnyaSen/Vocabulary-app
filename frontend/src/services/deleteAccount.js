import axios from "axios";
import { logoutAll } from "./logout";

export const deleteAccount = async () => {
  const usersURL = "/users/me";
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    logoutAll();

    const result = await axios.delete(usersURL, { headers });

    if (token) {
      localStorage.removeItem("token");
    }

    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
