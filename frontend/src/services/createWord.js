import axios from "axios";

export const createWord = async (URL, dataObject) => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWI1MGFlYWFkMWZmYTVmZjVjOWI5MDkiLCJpYXQiOjE1ODg5MjMxMTR9.qo781L7kGifk8pCiY3TxJp6oV_5PDEophkhh9ufzv1E`
  };

  try {
    const result = await axios.post(URL, dataObject, { headers });

    return result;
  } catch (error) {
    throw Error(error);
  }
};
