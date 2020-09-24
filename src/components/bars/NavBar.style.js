import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navbar: {
        height: 50,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    logo: {
        // paddingLeft: theme.spacing(4),
        // fontWeight: 'bold',
        // fontSize: 20,
        // letterSpacing: 2,
        marginLeft: theme.spacing(2),
        // width: 45,
        // height: 45,
        padding: 0,
    },
    logoText: {
        fontFamily: 'Black Han Sans',
        fontSize: 28,
        marginLeft: 4,
        paddingTop: 4,
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
