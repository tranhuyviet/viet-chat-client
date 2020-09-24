import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(2),
    },
    name: {
        fontWeight: 'bold',
        letterSpacing: 1,
        color: theme.palette.primary.main,
    },

    time: {
        textAlign: 'right',
        fontSize: 12,
        color: theme.palette.grey['600'],
        marginRight: 4,
    },
    checkedIcon: {
        fontSize: 16,
        // color: theme.palette.grey['600'],
        color: '#9DE1FE',
    },
    messageContainer: {
        margin: '0 8px',
        padding: '8px 16px',
        maxWidth: 400,
        // border: '1px solid',
        // borderColor: theme.palette.grey['200'],
        // boxShadow: theme.shadows[1],
        // background: theme.palette.common.white,
        background: '#D8EFFE',
        borderBottomLeftRadius: '20px!important',
        borderBottomRightRadius: '20px!important',
    },
    sender: {
        borderTopLeftRadius: '20px!important',
        background: '#DBF8C6',
    },
    receiver: {
        borderTopRightRadius: '20px!important',
    },
}));
