import axios from "axios";

export const commonApi = async (method, url, data) => {
  let reqConfig = {
    method, //since key and value are same only putting one is enough
    url,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios(reqConfig)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
