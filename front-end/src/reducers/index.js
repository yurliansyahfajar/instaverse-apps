import { combineReducers } from "redux";
import stories from './stories';


// combine all of the reducer 
export default combineReducers({
    stories : stories
});