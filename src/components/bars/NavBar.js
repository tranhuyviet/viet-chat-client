import React from 'react';
import { useStyles } from './NavBar.style';
import { Paper, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.navbar} elevation={0} square>
            <Grid container style={{ height: '100%' }}>
                <Grid item xs={6} container alignItems="center">
                    <Typography className={classes.logo}>VietChat</Typography>
                </Grid>
                <Grid item xs={6} container alignItems="center" justify="flex-end">
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/login" className={classes.link}>
                        Login
                    </Link>
                    <Link to="/signup" className={classes.link}>
                        Signup
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default NavBar;
