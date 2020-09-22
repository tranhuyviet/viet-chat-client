import React, { useContext } from 'react';
import { useStyles } from './NavBar.style';
import { Paper, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { AuthContext } from '../context/authContext';

const NavBar = () => {
    const classes = useStyles();
    const { user, logout } = useContext(AuthContext);
    return (
        <Paper className={classes.navbar} elevation={0} square>
            <Grid container style={{ height: '100%' }}>
                <Grid item xs={6} container alignItems="center">
                    <Typography className={classes.logo}>VietChat</Typography>
                </Grid>
                <Grid item xs={6} container alignItems="center" justify="flex-end">
                    {user && user._id && (
                        <Button startIcon={<ExitToAppIcon />} className={classes.iconButton} onClick={() => logout()}>
                            Logout
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default NavBar;
