import axios from "axios";

export const fetchData = async URL => {
  try {
    const result = await axios(URL);

    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
