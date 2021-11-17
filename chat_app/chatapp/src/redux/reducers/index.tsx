import { combineReducers } from "redux"
import { messagesReducer } from "./messagesReducers";

const combinedReducer = combineReducers({
    message: messagesReducer,
})

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
}

export default rootReducer;