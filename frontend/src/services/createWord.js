import axios from "axios";

export const createWord = async (URL, dataObject) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const result = await axios.post(URL, dataObject, { headers });

    return result;
  } catch (error) {
    throw Error(error);
  }
};
