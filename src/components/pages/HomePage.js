import React, { useState, useContext, useEffect } from 'react';
import { useStyles } from './HomePage.style';
import { Grid, Avatar, Typography } from '@material-ui/core';

import TabBar from '../bars/TabBar';
import TabPanel from '../share/TabPanel';

import UserList from '../lists/UserList';
import MessageList from '../lists/MessageList';
import SendMessage from '../share/SendMessage';

import { MessageContext } from '../context/messageContext';
import { AuthContext } from '../context/authContext';
import { UserContext } from '../context/userContext';
import chatlogo from '../../assets/images/chatlogo.svg';
import Typed from 'react-typed';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';

import { useSubscription } from '@apollo/client';
import { NEW_MESSAGE_SUBSCRIPTION, GET_MESSAGES_QUERY } from '../utils/graphql';

const HomePage = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(1);
    const { sendMessage, messages } = useContext(MessageContext);
    const { user } = useContext(AuthContext);
    const { userSelected } = useContext(UserContext);

    const { data, error } = useSubscription(NEW_MESSAGE_SUBSCRIPTION, {
        onSubscriptionData(result) {
            result.client.writeQuery({
                query: GET_MESSAGES_QUERY,
                variables: { withUser: userSelected },
                data: { getMessages: [...messages, result.subscriptionData.data.newMessage] },
            });
        },
    });

    const handleTabValueChange = (event, newValue) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        if (error) {
            console.log(error);
        }

        if (data) {
            sendMessage(data.newMessage);
        }
    }, [data, error]);

    // console.log('USER SELECTED', userSelected, user);

    return (
        <Grid container style={{ overflow: 'hidden' }}>
            <Grid item sm={4} container direction="column" className={classes.leftSideContainer}>
                <Grid item style={{ padding: '0 16px' }}>
                    <TabBar tabValue={tabValue} handleTabValueChange={handleTabValueChange} />
                </Grid>

                <Grid item container direction="column" style={{ marginTop: 8 }}>
                    {/* CHATS TAB */}
                    <TabPanel value={tabValue} index={0}>
                        Chats
                    </TabPanel>
                    {/* USERS TAB */}
                    <TabPanel value={tabValue} index={1}>
                        <UserList />
                    </TabPanel>
                    {/* FRIENDS TAB */}
                    <TabPanel value={tabValue} index={2}>
                        Friends
                    </TabPanel>
                </Grid>
            </Grid>

            <Grid
                item
                sm={8}
                container
                direction="column"
                className={`${!userSelected ? classes.rightSideContainer : ''}`}
            >
                {userSelected ? (
                    <>
                        <Grid item className={classes.messageListContainer}>
                            <MessageList />
                        </Grid>
                        <Grid item className={classes.sendMessageContainer}>
                            <SendMessage />
                        </Grid>
                    </>
                ) : (
                    <div className={classes.welcomeContainer}>
                        <Pulse forever>
                            <Avatar src={chatlogo} className={classes.welcomeLogo} />
                        </Pulse>
                        <Zoom top>
                            <Typography className={classes.welcomeText}>
                                Hello <span className={classes.welcomeName}>{user.name}! 😊</span>
                            </Typography>
                        </Zoom>
                        <Typography className={classes.welcomeText}>
                            <Typed strings={['Welcome to Viet Chat ']} typeSpeed={40} loop />
                        </Typography>
                    </div>
                )}
            </Grid>
        </Grid>
    );
};

export default HomePage;
