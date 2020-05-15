import axios from "axios";

export const getWords = async () => {
  const wordsURL = "/words";

  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const result = await axios(wordsURL, { headers });

    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
