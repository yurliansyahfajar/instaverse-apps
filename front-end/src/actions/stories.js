import * as api from '../api';

//get action getStories function with aync dispatch
export const getStories = () => async (dispatch) => {
    try {

        // get data from api;
        const {data} = await api.fetchStories();

        // dispatch type of action with payload, to send back to reducers 
        dispatch({ type : "FETCH_ALL_STORIES", payload : data});    
    } catch (error) {
        console.log(error.message);
    }
}

//create action getStories function with aync dispatch
export const createStories = (story) => async (dispatch) => {
    try {

        // post data to api endpoint
        const {data} = await api.createStories(story);

        // dispatch type of action with type and data payload back to reducers
        dispatch({ type: "CREATE_STORY", payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

