import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../assets/images/background1.jpg';

export const useStyles = makeStyles((theme) => ({
    leftSideContainer: {
        height: 'calc(100vh - 100px - 50px)',
        borderRight: '1px solid',
        borderRightColor: theme.palette.grey['300'],
    },
    messageListContainer: {
        // backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh - 100px - 50px - 60px)',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    sendMessageContainer: {
        height: 60,
        borderTop: '1px solid',
        borderColor: theme.palette.grey['300'],
        position: 'relative',
    },
}));
