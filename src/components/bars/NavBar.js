import React, { useContext } from 'react';
import { useStyles } from './NavBar.style';
import { Paper, Typography, Avatar, Grid, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import chatlogo from '../../assets/images/chatlogo.svg';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { AuthContext } from '../context/authContext';

const NavBar = () => {
    const classes = useStyles();
    const { user, logout } = useContext(AuthContext);
    return (
        <Paper className={classes.navbar} elevation={0} square>
            <Grid container style={{ height: '100%' }}>
                <Grid item xs={6} container alignItems="center">
                    <Avatar src={chatlogo} className={classes.logo} />
                    <Typography className={classes.logoText}>Chat</Typography>
                </Grid>
                <Grid item xs={6} container alignItems="center" justify="flex-end">
                    {user && user._id && (
                        <>
                            <Avatar src={user.avatarUrl} className={classes.avatar} />
                            <Typography className={classes.name}>{user.name}</Typography>
                            <Divider orientation="vertical" flexItem className={classes.divider} />
                            <Button
                                startIcon={<ExitToAppIcon />}
                                className={classes.iconButton}
                                onClick={() => logout()}
                            >
                                Logout
                            </Button>
                        </>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default NavBar;
