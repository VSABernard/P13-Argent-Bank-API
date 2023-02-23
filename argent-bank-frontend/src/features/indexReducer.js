import { combineReducers } from "redux"

import loginReducer from "./featuresUser/reducers/loginReducer"
import userReducer from "./featuresUser/reducers/userReducer"
import accountsReducer from "./featuresTransaction/reducers/accountsReducer"

/**
 * The combination of the functions in Redux 
 */
const allReducers = combineReducers({
    token : loginReducer,  
    user: userReducer,
    accounts : accountsReducer
})

export default allReducers