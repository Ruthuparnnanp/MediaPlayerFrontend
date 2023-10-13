import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

//uploading video
export const uploadVideo = async (video) => {
  // api call to http://localhost:4000/videos for adding video to json server and returns the response
  return await commonApi("POST", `${BASE_URL}/videos`, video);
};

//getting all videos
export const getAllVideos = async () => {
  return await commonApi("GET", `${BASE_URL}/videos`, "");
};

//get a single video which wants to be played
export const getAVideo = async (id) => {
  return await commonApi("GET", `${BASE_URL}/videos/${id}`, "");
};

//to delete the selected video from json server
export const deleteAVideo = async (id) => {
  return await commonApi("DELETE", `${BASE_URL}/videos/${id}`, {});
};

// delete a history
export const deleteAHistory = async (id) => {
  return await commonApi("DELETE", `${BASE_URL}/history/${id}`, {});
};

//adding a category
export const addCategory = async (category) => {
  // api call to http://localhost:4000/categories for adding category to json server and returns the response
  return await commonApi("POST", `${BASE_URL}/categories`, category);
};

// get/display all categories
export const getAllCategories = async () => {
  return await commonApi("GET", `${BASE_URL}/categories`, "");
};

//delete a category
export const deleteACategory = async (id) => {
  return await commonApi("DELETE", `${BASE_URL}/categories/${id}`, {});
};

//add video in watch history
export const addToHistory = async (videoHistory) => {
  // http post request to http://localhost:4000/history to get video from watchhistory in json server and return the response to watchHistory
  return await commonApi("POST", `${BASE_URL}/history`, videoHistory);
};

//get video details from watch history
export const getHistory = async () => {
  //to get video details from watch history array in json server
  return await commonApi("GET", `${BASE_URL}/history`, "");
};

export const updateCategory = async (id, category) => {
  //to get video details from watch history array in json server
  return await commonApi("PUT", `${BASE_URL}/categories/${id}`, category);
};
