import React, { useState } from 'react';
import { useStyles } from './TabBar.style';
import { Box, Typography, Grid, Tab, Tabs, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 60,
        fontWeight: theme.typography.fontWeightRegular,
        padding: '0px 4px',
        // marginRight: theme.spacing(1),
        // borderRight: '1px solid',
        // borderBottom: '1px solid',
        // borderRightColor: theme.palette.grey['400'],
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        '&:last-child': {
            borderRight: 'none',
        },
        '&:hover': {
            color: theme.palette.primary.main,
        },
        '&$selected': {
            color: theme.palette.primary.main,
            // color: theme.palette.common.white,
            fontWeight: 'bold',
            //  backgroundColor: theme.palette.primary.main,
        },
        // '&:focus': {
        //     color: '#40a9ff',
        // },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const TabBar = ({ tabValue, handleTabValueChange }) => {
    const classes = useStyles();

    return (
        <Paper elevation={0} square>
            <Tabs
                centered
                textColor="primary"
                value={tabValue}
                onChange={handleTabValueChange}
                variant="fullWidth"
                indicatorColor="primary"
            >
                <AntTab label="Chats" />
                <AntTab label="Users" />
                <AntTab label="Friends" />
            </Tabs>
        </Paper>
    );
};

export default TabBar;
