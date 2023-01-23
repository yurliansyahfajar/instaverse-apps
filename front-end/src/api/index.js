import axios from "axios";

// create url stories endpoint in a variable
const url = "http://localhost:5001/stories";

// fetch data stories from endpoint with axios
export const fetchStories = async () => axios.get(url);

// post data stories to createstory endpoint with axios
export const createStories = async (story) => axios.post(url, story);

// post id and data stories to patchstory (update) endpoint with axios
export const updateStories = async (id, story) => axios.patch(`${url}/${id}`, story);

// post id and data stories to deletestory (delete) endpoint with axios
export const deleteStories = async (id) => axios.delete(`${url}/${id}`);

// post id and data stories to likestory (likestory) endpoint with axios
export const likeStories = async (id) => axios.patch(`${url}/${id}/likeStories`);