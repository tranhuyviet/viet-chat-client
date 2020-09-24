import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../assets/images/background.jpg';

export const useStyles = makeStyles((theme) => ({
    leftSideContainer: {
        height: 'calc(100vh - 100px - 50px)',
        borderRight: '1px solid',
        borderRightColor: theme.palette.grey['300'],
    },
    rightSideContainer: {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'calc(100vh - 100px - 50px)',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
}));
