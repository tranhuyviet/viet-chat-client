import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../assets/images/background1.jpg';

export const useStyles = makeStyles((theme) => ({
    leftSideContainer: {
        height: 'calc(100vh - 100px - 50px)',
        borderRight: '1px solid',
        borderRightColor: theme.palette.grey['300'],
    },
    rightSideContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // background: '#edeaf9',
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
    welcomeContainer: {
        textAlign: 'center',
        width: 400,
    },
    welcomeLogo: {
        margin: '0 auto',
        background: theme.palette.primary.main,
        width: 200,
        height: 200,
        border: 'none',
        marginBottom: 32,
    },
    welcomeText: {
        fontSize: 22,
        // color: theme.palette.primary.main,
        color: theme.palette.grey['600'],
        marginBottom: 8,
    },
    welcomeName: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: 24,
        letterSpacing: 1,
    },
}));
