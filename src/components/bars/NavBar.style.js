import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navbar: {
        height: 50,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    logo: {
        paddingLeft: theme.spacing(2),
        fontWeight: 'bold',
        fontSize: 24,
        letterSpacing: 2,
    },
    link: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.white,
        fontSize: 16,
        textDecoration: 'none',
        '&:active, &:selected': {
            color: 'green',
        },
    },
    iconButton: {
        textTransform: 'capitalize',
        color: 'inherit',
        fontSize: '16px',
        paddingRight: 16,
    },
}));
