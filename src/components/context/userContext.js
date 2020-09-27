import React, { useReducer, createContext } from 'react';

const initialState = {
    users: [],
    userSelected: '',
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
        case 'SET_SELECTED_USER': {
            return {
                ...state,
                userSelected: action.payload,
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

    const setUserSelected = (user) => {
        dispatch({
            type: 'SET_SELECTED_USER',
            payload: user,
        });
    };

    return (
        <UserContext.Provider
            value={{ users: state.users, getUsers, userSelected: state.userSelected, setUserSelected }}
            {...props}
        />
    );
};

export { UserContext, UserProvider };
