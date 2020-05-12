import axios from "axios";

export const login = async dataObject => {
  const usersURL = "/users/login";

  try {
    const result = await axios.post(usersURL, dataObject);

    const token = result.data.token;
    const userName = result.data.user.name;

    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userName", JSON.stringify(userName));
    }

    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
