import loginReducer from "./loginReducer"

import { combineReducers } from "redux"
import userReducer from "./userReducer"

/**
 * The combination of the functions in Redux 
 */
const allReducers = combineReducers({
    token : loginReducer,  
    user: userReducer
})

export default allReducers