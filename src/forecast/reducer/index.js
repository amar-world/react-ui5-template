import { combineReducers } from "redux";
import { HeaderReducer } from "./HeaderReducer";
import {CommonReducer} from './CommonReducer';
// import {taskHeaderReducer} from './taskHeaderReducer';

const rootReducer = combineReducers({
    HeaderReducer:HeaderReducer,
    CommonReducer:CommonReducer
});

export default rootReducer;