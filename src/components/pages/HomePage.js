import React, { useState } from 'react';
import { useStyles } from './HomePage.style';
import { Grid } from '@material-ui/core';

import TabBar from '../bars/TabBar';
import TabPanel from '../share/TabPanel';

import UserList from '../lists/UserList';
import MessageList from '../lists/MessageList';
const HomePage = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(1);

    const handleTabValueChange = (event, newValue) => {
        setTabValue(newValue);
    };

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

            <Grid item sm={8} className={classes.rightSideContainer}>
                <MessageList />
            </Grid>
        </Grid>
    );
};

export default HomePage;
