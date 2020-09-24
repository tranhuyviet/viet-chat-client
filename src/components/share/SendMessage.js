import React, { useContext } from 'react';
import { useStyles } from './SendMessage.style';
import { Paper, Button, CircularProgress } from '@material-ui/core';
import { useFormik } from 'formik';
import { MessageContext } from '../context/messageContext';
import { SEND_MESSAGE_MUTATION, GET_MESSAGES_QUERY } from '../utils/graphql';
import { useMutation } from '@apollo/client';
import errorParse from '../utils/errorParse';

const SendMessage = () => {
    const classes = useStyles();
    const { userSelected, sendMessage, messages } = useContext(MessageContext);

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
        // validationSchema: commentSchema,
        // isInitialValid: commentSchema.isValidSync(initialValues),
    });

    const [sendMessageSubmit, { loading }] = useMutation(SEND_MESSAGE_MUTATION, {
        update(proxy, result) {
            console.log('SEND MESSAGE RESULT', result.data.sendMessage);
            sendMessage(result.data.sendMessage);
            // const data = proxy.readQuery({
            //     query: GET_MESSAGES_QUERY,
            //     variables: { withUser: userSelected },
            // });
            // console.log('DATA', data);
            proxy.writeQuery({
                query: GET_MESSAGES_QUERY,
                variables: { withUser: userSelected },
                data: { getMessages: [...messages, result.data.sendMessage] },
            });
        },
        onError(error) {
            console.log(error.graphQLErrors[0]);
            setErrors(errorParse(error));
        },
    });

    function onSubmit(values) {
        values.to = userSelected;
        sendMessageSubmit({ variables: values });
        values.message = '';
    }

    // console.log(userSelected);

    return (
        <Paper>
            <form className={classes.inputContainer} noValidate onSubmit={handleSubmit}>
                <input
                    name="message"
                    // placeholder={user ? 'Add a comment' : 'You must login to add comments and likes'}
                    placeholder="Type a message"
                    className={classes.input}
                    autoComplete="off"
                    autoCorrect="off"
                    wrap="hard"
                    height="18"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // disabled={!user || loading}
                ></input>
                <Button
                    type="submit"
                    className={classes.postButton}
                    color="primary"
                    // disabled={!isValid || !user || loading}
                >
                    Send
                </Button>
                {/* {loading && <CircularProgress style={{ position: 'absolute', left: '50%' }} />} */}
            </form>
        </Paper>
    );
};

export default SendMessage;
