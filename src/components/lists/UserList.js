import React, { useContext } from 'react';

import { useQuery } from '@apollo/client';
import { GET_USERS_QUERY } from '../utils/graphql';
import { UserContext } from '../context/userContext';

import { Grid } from '@material-ui/core';

import UserItem from './UserItem';

const UserList = () => {
    const { users, getUsers } = useContext(UserContext);

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
        <Grid container direction="column" component="span">
            {users && users.map((user) => <UserItem user={user} key={user._id} />)}
        </Grid>
    );
};

export default UserList;
