import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const AuthRoute = (props) => {
    const { user } = useContext(AuthContext);

    if (props.auth && !user) {
        return <Redirect to="/login" />;
    } else if (props.notAuth && user) {
        return <Redirect to="/" />;
    } else {
        return <Route component={props.component} {...props} />;
    }
};

export default AuthRoute;
