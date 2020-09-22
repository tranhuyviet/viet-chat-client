import React, { useState } from 'react';
import { useStyles } from './ErrorMessage.style';
import { Paper, Typography, Collapse, Slide, IconButton } from '@material-ui/core';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CloseIcon from '@material-ui/icons/Close';

const ErrorMessage = ({ text }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(text ? true : false);
    return (
        <Slide in={open} direction="up">
            <Paper className={`${classes.container} ${!open ? classes.hide : ''}`}>
                <ErrorOutlineIcon className={classes.icon} />
                <Typography>{text}</Typography>
                <IconButton color="inherit" className={classes.button} onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Slide>
    );
};

export default ErrorMessage;
