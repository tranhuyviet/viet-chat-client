import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    itemContainer: {
        padding: '8px 16px',
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey['300'],
        // '&:last-child': {
        //     borderTop: '1px solid',
        //     borderTopColor: theme.palette.grey['300'],
        // },
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    subtitle: {
        fontSize: '12px',
        color: theme.palette.grey['600'],
    },
}));
