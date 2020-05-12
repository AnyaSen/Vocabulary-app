import axios from "axios";

export const editWord = async (objectTochange, id) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const wordURL = `/words/${id}`;

    const result = await axios.patch(wordURL, objectTochange, id, { headers });

    return result;
  } catch (error) {
    throw Error(error);
  }
};
