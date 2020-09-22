import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

const MyButton = ({ loading = false, title, type = 'submit', color = 'primary', variant = 'outlined' }) => {
    return (
        <Button type={type} variant={variant} color={color} disabled={loading}>
            {loading ? (
                <>
                    <CircularProgress style={{ marginRight: 16, height: 20, width: 20 }} />
                    <span>{title}</span>
                </>
            ) : (
                `${title}`
            )}
        </Button>
    );
};

export default MyButton;
