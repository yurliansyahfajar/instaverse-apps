import axios from "axios";

// create url stories endpoint in a variable


const api = axios.create({ baseURL: "http://localhost:5001" });

api.interceptors.request.use(( req ) => {
    if (localStorage.getItem("profile")) {
        const profile = JSON.parse(localStorage.getItem('profile'));
        req.headers.Authorization = `Bearer ${profile.token}`;
    }

    return req;
});

// fetch data stories from endpoint with axios
export const fetchStories = async () => api.get("/stories");

// post data stories to createstory endpoint with axios
export const createStories = async (story) => api.post("/stories", story);

// post id and data stories to patchstory (update) endpoint with axios
export const updateStories = async (id, story) => api.patch(`${"/stories"}/${id}`, story);

// post id and data stories to deletestory (delete) endpoint with axios
export const deleteStories = async (id) => api.delete(`${"/stories"}/${id}`);

// post id and data stories to likestory (likestory) endpoint with axios
export const likeStories = async (id, story) => api.patch(`${"/stories"}/${id}/likeStories`, story);

export const login = async (formValues) => api.post("/user/login", formValues);

export const signup = async (formValues) => api.post("/user/signup", formValues);