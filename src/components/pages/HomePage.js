import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
const HomePage = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            This is Home Page
            {user && <p>{user.name}</p>}
        </div>
    );
};

export default HomePage;
