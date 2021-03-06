import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    inputContainer: {
        height: 60,
        width: '100%',

        position: 'absolute',
        zIndex: 101,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
    },

    input: {
        maxHeight: 58,
        width: '100%',
        outline: 'none',
        border: 'none',
        fontFamily: 'inherit!important',
        fontSize: 16,
        paddingLeft: 16,
        // paddingTop: 18,

        display: 'flex',
        flexGrow: 1,
        overflowWrap: 'break-word',
    },
}));
