import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: 8,
        backgroundColor: theme.palette.error.main,
        color: theme.palette.common.white,
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    hide: {
        display: 'none',
    },
    icon: {
        marginRight: 8,
        fontSize: 30,
    },
    button: {},
}));
