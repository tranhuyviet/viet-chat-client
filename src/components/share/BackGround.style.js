import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    particles: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
}));
