import React, { useReducer, createContext } from 'react';

const initialState = {
    users: [],
};

const UserContext = createContext({
    users: [],
    getUsers: (users) => {},
});

const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS': {
            return {
                ...state,
                users: action.payload,
            };
        }
        default:
            return state;
    }
};

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const getUsers = (users) => {
        dispatch({
            type: 'GET_USERS',
            payload: users,
        });
    };

    return <UserContext.Provider value={{ users: state.users, getUsers }} {...props} />;
};

export { UserContext, UserProvider };
