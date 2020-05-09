import axios from "axios";

export const signup = async dataObject => {
  const usersURL = "/users";

  try {
    const result = await axios.post(usersURL, dataObject);

    const token = result.data.token;

    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
