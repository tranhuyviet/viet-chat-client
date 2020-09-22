import { gql } from '@apollo/client';

// ****** USER ****** //
// SIGNUP
export const SIGNUP_MUTATION = gql`
    mutation signup($name: String!, $email: String!, $password: String!, $confirmPassword: String!) {
        signup(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
            _id
            name
            email
            avatarUrl
            token
            createdAt
        }
    }
`;
