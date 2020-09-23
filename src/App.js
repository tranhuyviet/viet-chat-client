import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthRoute from './components/utils/AuthRoute';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { AuthProvider } from './components/context/authContext';
import { UserProvider } from './components/context/userContext';
// import BackGround from './components/share/BackGround';

import NavBar from './components/bars/NavBar';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#512da8',
            },
        },
        share: {
            container: {
                height: 'calc(100vh - 100px)',
                backgroundColor: 'green',
            },
        },
    });
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <BrowserRouter>
                        <CssBaseline />
                        <div className="container">
                            <NavBar />
                            <Switch>
                                <AuthRoute path="/login" component={LoginPage} notAuth />
                                <AuthRoute path="/signup" component={SignupPage} notAuth />
                                <AuthRoute exac path="/" component={HomePage} auth />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </UserProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
