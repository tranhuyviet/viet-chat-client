import React, { useReducer, createContext } from 'react';

const initialState = {
    messages: [],
};

const MessageContext = createContext({
    messages: [],
    getMessages: (messages) => {},
});

const messageReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MESSAGES': {
            return {
                ...state,
                messages: action.payload,
            };
        }
        default:
            return state;
    }
};

const MessageProvider = (props) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);

    const getMessages = (messages) => {
        dispatch({
            type: 'GET_MESSAGES',
            payload: messages,
        });
    };

    return <MessageContext.Provider value={{ messages: state.messages, getMessages }} {...props} />;
};

export { MessageContext, MessageProvider };
