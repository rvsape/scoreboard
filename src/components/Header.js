import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: 'center',
        padding: theme.spacing(2),
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: '0.2rem',
        textTransform: 'uppercase'
    }
}))

function Header() {
    const classes = useStyles();

    return (
        <Grid item className={classes.root}>
            <AppBar position="fixed">
                <Typography variant="h2" className={classes.title}>
                    Scoreboard
                </Typography>
            </AppBar>
        </Grid>
    )
}

export default Header;