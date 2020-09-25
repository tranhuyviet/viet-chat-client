import React, { useContext } from 'react';
import { useStyles } from './MessageItem.style';
import { Paper, Typography, Grid, Avatar } from '@material-ui/core';
import { AuthContext } from '../context/authContext';
import moment from 'moment';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';

const MessageItem = ({ message }) => {
    const classes = useStyles();
    const { user } = useContext(AuthContext);

    const isSender = user._id === message.from._id;
    console.log(message);
    return (
        <Grid container className={classes.container}>
            <Grid item container justify={isSender ? 'flex-end' : 'flex-start'}>
                {!isSender && <Avatar src={message.from.avatarUrl}>{message.from.name[0]}</Avatar>}
                <div className={`${classes.messageContainer} ${isSender ? classes.sender : classes.receiver}`}>
                    {!isSender && <Typography className={classes.name}>{message.from.name}</Typography>}
                    <Typography className={classes.message}>{message.message}</Typography>
                    <Grid container alignItems="center" justify="flex-end">
                        <Typography className={classes.time}>{moment(message.createdAt).format('hh:mm')}</Typography>
                        <DoneAllIcon className={classes.checkedIcon} />
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
};

export default MessageItem;
