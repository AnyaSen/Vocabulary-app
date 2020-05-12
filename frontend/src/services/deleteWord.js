import axios from "axios";

export const deleteWord = async id => {
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const wordURL = `/words/${id}`;

    const result = await axios.delete(wordURL, { headers });

    return result;
  } catch (error) {
    throw Error(error);
  }
};
