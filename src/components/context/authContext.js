import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
    user: null,
};

if (localStorage.vietChatToken) {
    const decodedToken = jwtDecode(localStorage.vietChatToken);
    // console.log('Decode Token:', decodedToken);

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('vietChatToken');
    } else {
        initialState.user = decodedToken;
        initialState.user.token = localStorage.vietChatToken;
    }
}

const AuthContext = createContext({
    user: null,
    login: (user) => {},
    logout: () => {},
});

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                user: action.payload,
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                user: null,
            };
        }
        default:
            return state;
    }
};

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (user) => {
        console.log('login run');
        localStorage.vietChatToken = user.token;
        dispatch({
            type: 'LOGIN',
            payload: user,
        });
    };

    const logout = () => {
        localStorage.removeItem('vietChatToken');
        dispatch({ type: 'LOGOUT' });
    };

    return <AuthContext.Provider value={{ user: state.user, login, logout }} {...props} />;
};

export { AuthContext, AuthProvider };
