import axios from "axios";

// create url stories endpoint in a variable
const url = "http://localhost:5001/stories";

// fetch data stories from endpoint with axios
export const fetchStories = () => axios.get(url);

// post data stories to createstory endpoint with axios
export const createStories = (story) => axios.post(url, story);