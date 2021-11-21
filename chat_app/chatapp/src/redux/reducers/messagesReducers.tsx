import { MESSAGES_ACTIONS } from "../actions/actionTypes";

const initialState = {
    messages: [],
}

export const messagesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case MESSAGES_ACTIONS.RECEIVED:
            return {
                messages: action.payload,
            }
        case MESSAGES_ACTIONS.SENT:
            console.log(state);
            return {
                messages: action.payload,
            }
        default:
            return state
    }
}