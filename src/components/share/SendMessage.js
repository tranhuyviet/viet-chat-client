import React, { useContext } from 'react';
import { useStyles } from './SendMessage.style';
import { Paper, Button, CircularProgress, IconButton } from '@material-ui/core';
import { useFormik } from 'formik';

import { MessageContext } from '../context/messageContext';
import { UserContext } from '../context/userContext';

import { SEND_MESSAGE_MUTATION, GET_MESSAGES_QUERY } from '../utils/graphql';
import { useMutation } from '@apollo/client';
import errorParse from '../utils/errorParse';
import { sendMessageValidate } from '../validate/messageValidate';

import SendRoundedIcon from '@material-ui/icons/SendRounded';

const SendMessage = () => {
    const classes = useStyles();
    const { sendMessage, messages } = useContext(MessageContext);
    const { userSelected } = useContext(UserContext);

    const initialValues = {
        to: userSelected,
        message: '',
    };

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        setErrors,
        isValid,
        setValues,
        // touched,
        // setFieldValue,
    } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: sendMessageValidate,
        isInitialValid: sendMessageValidate.isValidSync(initialValues),
    });

    const [sendMessageSubmit, { loading }] = useMutation(SEND_MESSAGE_MUTATION, {
        onError(error) {
            console.log(error.graphQLErrors[0]);
            setErrors(errorParse(error));
        },
    });

    function onSubmit(values) {
        values.to = userSelected;
        sendMessageSubmit({ variables: values });
        setValues({ ...values, message: '' });
    }

    // console.log(userSelected);

    return (
        <Paper>
            <form className={classes.inputContainer} noValidate onSubmit={handleSubmit}>
                <input
                    name="message"
                    placeholder="Type a message"
                    className={classes.input}
                    autoComplete="off"
                    autoCorrect="off"
                    wrap="hard"
                    height="18"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></input>
                {/* <Button type="submit" className={classes.postButton} color="primary" disabled={!isValid || loading}>
                    Send
                </Button> */}
                <IconButton type="submit" className={classes.postButton} color="primary" disabled={!isValid}>
                    {loading ? (
                        <CircularProgress style={{ height: 24, width: 24 }} />
                    ) : (
                        <SendRoundedIcon style={{ fontSize: 32 }} />
                    )}
                </IconButton>
            </form>
        </Paper>
    );
};

export default SendMessage;
