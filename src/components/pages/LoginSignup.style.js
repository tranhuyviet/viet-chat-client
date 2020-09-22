import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        maxWidth: 400,
        marginTop: theme.spacing(8),
        // border: '1px solid',
        padding: theme.spacing(4),
        // borderColor: theme.palette.primary.main,
        boxShadow: theme.shadows[3],
        borderRadius: 16,
    },
    personIcon: {
        fontSize: 60,
        color: theme.palette.primary.main,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        marginBottom: theme.spacing(3),
        fontWeight: 'bold',
        color: theme.palette.grey['600'],
        letterSpacing: 1,
    },
    textField: {
        marginBottom: theme.spacing(3),
    },
    link: {
        marginLeft: theme.spacing(1),
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: 16,
    },
}));
