import { MESSAGES_ACTIONS } from "./actionTypes";

const sentMessage = (message) => ({
    type: MESSAGES_ACTIONS.SENT,
    payload: message,
});

const newMessage = (message) => ({
    type: MESSAGES_ACTIONS.RECEIVED,
    payload: message,
});

export default { sentMessage, newMessage }