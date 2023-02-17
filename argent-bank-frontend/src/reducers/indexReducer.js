import loggedReducer from "./isLoggedReducer";

import { combineReducers } from "redux";
import userReducer from "./userReducer";

const allReducers = combineReducers({
    isLogged: loggedReducer,
    user: userReducer
})

export default allReducers