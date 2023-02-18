import loggedReducer from "./isLoggedReducer";

import { combineReducers } from "redux";
import userReducer from "./userReducer";

/**
 * The combination of the functions in Redux 
 */
const allReducers = combineReducers({
    isLogged: loggedReducer,
    user: userReducer
})

export default allReducers