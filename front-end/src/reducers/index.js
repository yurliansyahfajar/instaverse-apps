import { combineReducers } from "redux";
import stories from './stories';
import authentication from "./authentication";


// combine all of the reducer 
export default combineReducers({
    stories : stories,
    authentication
});