import axios from "axios";

export const readData = async URL => {
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const result = await axios(URL, { headers });

    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
