import React from 'react';
import { useStyles } from './UserItem.style';
import { Paper, Avatar, Typography, Grid, CardActionArea } from '@material-ui/core';

const UserItem = ({ user }) => {
    const classes = useStyles();
    return (
        <Paper component="span" elevation={0} square>
            <CardActionArea className={classes.itemContainer}>
                <Grid container component="span">
                    <Grid item xs={2} component="span">
                        <Avatar src={user.avatarUrl} component="span" />
                    </Grid>
                    <Grid item xs={10} component="span" style={{ paddingLeft: 8 }} container direction="column">
                        <Typography component="span" className={classes.name} color="primary">
                            {user.name}
                        </Typography>

                        <Typography component="span" className={classes.subtitle}>
                            I am using VietChat
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Paper>
    );
};

export default UserItem;
