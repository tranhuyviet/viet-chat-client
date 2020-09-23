import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import TabBar from '../bars/TabBar';
import TabPanel from '../share/TabPanel';

import UserList from '../lists/UserList';
import MessageList from '../lists/MessageList';
const HomePage = () => {
    const [tabValue, setTabValue] = useState(1);

    const handleTabValueChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Grid container>
            <Grid item sm={4} container direction="column">
                <Grid item sm={12}>
                    <TabBar tabValue={tabValue} handleTabValueChange={handleTabValueChange} />
                </Grid>
                <Grid item sm={12}>
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
            <Grid item sm={8} style={{ borderLeft: '1px solid', height: '100%' }}>
                <MessageList />
            </Grid>
        </Grid>
    );
};

export default HomePage;
