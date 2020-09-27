import React, { useContext } from 'react';

import { useQuery } from '@apollo/client';
import { useTheme } from '@material-ui/core/styles';
import { GET_USERS_QUERY } from '../utils/graphql';
import { UserContext } from '../context/userContext';

import { Grid, CircularProgress } from '@material-ui/core';

import UserItem from './UserItem';

const UserList = () => {
    const { users, getUsers, userSelected, setUserSelected } = useContext(UserContext);
    const theme = useTheme();

    const { loading } = useQuery(GET_USERS_QUERY, {
        onCompleted(data) {
            // console.log(data.getUsers);
            getUsers(data.getUsers);
        },
        onError(error) {
            console.log(error.graphQLErrors[0]);
        },
    });

    return (
        <Grid
            container
            direction="column"
            component="span"
            style={{ borderTop: '1px solid', borderTopColor: theme.palette.grey['200'] }}
        >
            {/* {loading && (
                <Grid item container component="span" justify="center">
                    <CircularProgress style={{ marginTop: 16, height: 20, width: 20 }} component="span" />
                </Grid>
            )} */}
            {users &&
                users.map((user) => (
                    <UserItem
                        user={user}
                        key={user._id}
                        userSelected={userSelected}
                        setUserSelected={setUserSelected}
                    />
                ))}
        </Grid>
    );
};

export default UserList;
