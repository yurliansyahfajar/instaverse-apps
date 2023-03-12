import * as api from '../api';
import {
    FETCH_ALL_STORIES,
    CREATE_STORY,
    UPDATE_STORY,
    LIKE_STORY,
    DELETE_STORY
} from '../constants/actionTypes';
//get action getStories function with aync dispatch
export const getStories = () => async (dispatch) => {
    try {

        // get data from api;
        const {data} = await api.fetchStories();

        // dispatch type of action with payload, to send back to reducers 
        dispatch({ type : FETCH_ALL_STORIES, payload : data});    
    } catch (error) {
        console.log(error.message);
    }
}

//create action getStories function with aync dispatch
export const createStories = (story) => async (dispatch) => {
    console.log(story);
    try {

        // post data to api endpoint
        const {data} = await api.createStories(story);
        // dispatch type of action with type and data payload back to reducers
        dispatch({ type: CREATE_STORY, payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

//create action updateStories function with aync dispatch
export const updateStories = (id, story) => async (dispatch) => {
    try {

        // patch/update data to api endpoint
        const {data} = await api.updateStories(id, story);

        // dispatch type of action with type and data payload back to reducers
        dispatch({ type: UPDATE_STORY, payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

//create action deleteStories function with aync dispatch
export const deleteStories = (id) => async (dispatch) => {
    try {

        // patch/update data to api endpoint
        await api.deleteStories(id);

        // dispatch type of action with type and data payload back to reducers
        dispatch({ type: DELETE_STORY, payload : id});
    } catch (error) {
        console.log(error.message);
    }
}

//create action likeStories function with aync dispatch
export const likeStories = (id, story) => async (dispatch) => {
    try {

        // patch/update data to api endpoint
        const {data} = await api.likeStories(id, story);

        // dispatch type of action with type and data payload back to reducers
        dispatch({ type: LIKE_STORY, payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

