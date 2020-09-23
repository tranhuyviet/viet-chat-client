import React, { useContext, useEffect, useState } from 'react';
import { useStyles } from './UserItem.style';
import { Paper, Avatar, Typography, Grid, CardActionArea } from '@material-ui/core';

import { MessageContext } from '../context/messageContext';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_MESSAGES_QUERY } from '../utils/graphql';
import errorParse from '../utils/errorParse';

const UserItem = ({ user }) => {
    const classes = useStyles();
    const [withUser, setWithUser] = useState(null);
    const { getMessages } = useContext(MessageContext);

    const [getMessageSubmit, { loading, client }] = useLazyQuery(GET_MESSAGES_QUERY, {
        onCompleted(data) {
            console.log('ON COMPLETED DATA', data);
            getMessages(data.getMessages);
        },
        onError(error) {
            console.log(errorParse(error));
        },
        // fetchPolicy: 'cache-and-network',
        // notifyOnNetworkStatusChange: true,
    });

    const selectedUserToGetMessage = (withUser) => {
        getMessageSubmit({
            variables: { withUser },
        });
        try {
            const cacheData = client.readQuery({
                query: GET_MESSAGES_QUERY,
                variables: { withUser },
            });
            console.log('CATCH DATA', cacheData);
            getMessages(cacheData.getMessages);
        } catch (error) {
            // console.log(error);
        }
    };

    return (
        <Paper component="span" elevation={0} square>
            <CardActionArea className={classes.itemContainer} onClick={() => selectedUserToGetMessage(user._id)}>
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
