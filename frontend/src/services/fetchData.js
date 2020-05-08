import axios from "axios";

export const fetchData = async URL => {
  const headers = {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWI1MGFlYWFkMWZmYTVmZjVjOWI5MDkiLCJpYXQiOjE1ODg5MjMxMTR9.qo781L7kGifk8pCiY3TxJp6oV_5PDEophkhh9ufzv1E"
  };

  try {
    const result = await axios(URL, { headers });

    return result.data;
  } catch (error) {
    throw Error(error);
  }
};
