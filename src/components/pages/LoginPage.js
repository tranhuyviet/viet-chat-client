import React, { useContext } from 'react';
import { useStyles } from './LoginSignup.style';
import { Paper, Typography, Grid, TextField, Snackbar } from '@material-ui/core';
import { useFormik } from 'formik';

import MyButton from '../share/MyButton';
import { Link } from 'react-router-dom';
import { LOGIN_QUERY } from '../utils/graphql';
import { useLazyQuery } from '@apollo/client';
import { AuthContext } from '../context/authContext';
import errorParse from '../utils/errorParse';
import ErrorMessage from '../share/ErrorMessage';

const LoginPage = (props) => {
    const classes = useStyles();
    const { login } = useContext(AuthContext);

    const initialValues = {
        email: '',
        password: '',
    };

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        setErrors,
        // isValid,
        // setValues,
        // touched,
        setFieldValue,
    } = useFormik({
        initialValues,
        onSubmit,
        // validationSchema: signupSchema,
    });

    const [loginSubmit, { loading }] = useLazyQuery(LOGIN_QUERY, {
        onCompleted(data) {
            // console.log(data);
            login(data.login);
            props.history.push('/');
        },
        onError(error) {
            // console.log(error.graphQLErrors[0]);
            setErrors(errorParse(error));
        },
    });

    function onSubmit(values) {
        // console.log('submit', values);
        loginSubmit({ variables: values });
    }

    return (
        <Paper elevation={0} square className={classes.pageContainer}>
            <Grid item container direction="column" alignItems="center" className={classes.contentContainer}>
                {/* <Grid item container justify="center">
                    <AccountCircleOutlinedIcon className={classes.personIcon} />
                </Grid> */}
                <Grid item>
                    <Typography className={classes.title}>Login</Typography>
                    {errors && errors.global && <ErrorMessage text={errors.global} />}
                </Grid>
                <Grid item>
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            type="email"
                            name="email"
                            error={errors.email ? true : false}
                            label="Email"
                            placeholder="example@example.com"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.email}
                            className={classes.textField}
                        />

                        <TextField
                            type="password"
                            name="password"
                            error={errors.password ? true : false}
                            label="Password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.password}
                            className={classes.textField}
                        />

                        <Grid item container justify="flex-end" alignItems="center">
                            <MyButton title="Login" loading={loading} />
                        </Grid>
                        <Grid item container justify="center" style={{ marginTop: 24 }}>
                            <Typography>Not a member?</Typography>
                            <Link className={classes.link} to="/signup">
                                Register now
                            </Link>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default LoginPage;
