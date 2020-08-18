import axios from "axios";

export const createWord = async dataObject => {
  const wordsURL = "/words";

  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const result = await axios.post(wordsURL, dataObject, { headers });

    return result;
  } catch (error) {
    throw Error(error);
  }
};
