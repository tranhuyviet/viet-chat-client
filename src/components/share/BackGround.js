import React from 'react';
import Particles from 'react-particles-js';
import { useStyles } from './BackGround.style';
import { useTheme } from '@material-ui/core/styles';

const BackGround = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 80,
                    },
                    size: {
                        value: 4,
                    },
                    color: {
                        value: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
                    },
                    line_linked: {
                        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
                        opacity: '0.1',
                        width: '1',
                    },
                    opacity: {
                        value: '0.1',
                        random: false,
                        anim: {
                            speed: '0.5',
                            sync: false,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                },
            }}
            className={classes.particles}
        >
            {children}
        </Particles>
    );
};

export default BackGround;
