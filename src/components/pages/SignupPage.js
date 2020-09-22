import React, { useContext } from 'react';
import { useStyles } from './LoginSignup.style';
import { Paper, Typography, Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import { useFormik } from 'formik';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MyButton from '../share/MyButton';
import { Link } from 'react-router-dom';
import { SIGNUP_MUTATION } from '../utils/graphql';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../context/authContext';
import errorParse from '../utils/errorParse';
import ErrorMessage from '../share/ErrorMessage';

const SignupPage = (props) => {
    const classes = useStyles();
    const { login } = useContext(AuthContext);

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    const [signup, { loading }] = useMutation(SIGNUP_MUTATION, {
        update(proxy, result) {
            console.log('RESULT SIGNUP', result.data.signup);
            login(result.data.signup);
            props.history.push('/');
        },
        onError(error) {
            console.log(error.graphQLErrors[0]);
            setErrors(errorParse(error));
        },
    });

    function onSubmit(values) {
        console.log('submit', values);
        signup({ variables: values });
    }

    return (
        <Paper elevation={0} square className={classes.pageContainer}>
            <Grid item container direction="column" alignItems="center" className={classes.contentContainer}>
                {/* <Grid item container justify="center">
                    <AccountCircleOutlinedIcon className={classes.personIcon} />
                </Grid> */}
                <Grid item>
                    <Typography className={classes.title}>Register</Typography>
                    {errors && errors.global && <ErrorMessage text={errors.global} />}
                </Grid>
                <Grid item>
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            name="name"
                            error={errors.name ? true : false}
                            label="Name"
                            placeholder="Viet Tran"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.name}
                            className={classes.textField}
                        />

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

                        <TextField
                            type="password"
                            name="confirmPassword"
                            error={errors.confirmPassword ? true : false}
                            label="Confirm Password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.confirmPassword}
                            className={classes.textField}
                        />
                        <Grid item container justify="flex-end" alignItems="center">
                            <MyButton title="Register" loading={loading} />
                        </Grid>
                        <Grid item container justify="center" alignItems="center" style={{ marginTop: 24 }}>
                            <Typography>Already have an account?</Typography>
                            <Link className={classes.link} to="/login">
                                Login
                            </Link>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SignupPage;
