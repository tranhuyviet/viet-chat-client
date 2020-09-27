import React, { useReducer, createContext } from 'react';

const initialState = {
    messages: [],
};

const MessageContext = createContext({
    messages: [],
    // userSelected: '',
    getMessages: (messages) => {},
    sendMessage: (message) => {},
});

const messageReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MESSAGES': {
            return {
                ...state,
                messages: action.messages,
                // userSelected: action.userSelected,
            };
        }
        case 'SEND_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, action.payload],
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
            messages,
            // userSelected,
        });
    };

    const sendMessage = (message) => {
        dispatch({
            type: 'SEND_MESSAGE',
            payload: message,
        });
    };
    return <MessageContext.Provider value={{ messages: state.messages, getMessages, sendMessage }} {...props} />;
};

export { MessageContext, MessageProvider };
