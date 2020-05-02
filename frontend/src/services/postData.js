import axios from "axios";

export const postData = async (URL, dataObject) => {
  try {
    const result = await axios.post(URL, dataObject);

    return result;
  } catch (error) {
    throw Error(error);
  }
};
