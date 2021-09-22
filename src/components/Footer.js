import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CustomButton from './Button';

const useStyles = makeStyles((theme) => ({
    footer: {
        top: 'auto',
        bottom: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.down('321')]: {
            padding: theme.spacing(1),
        },
    },
    buttonContainer: {
        "& button": {
            margin: theme.spacing(1),
        }
    }
}));

function Footer({addAction, addPlayer, playerCount, clearBoard}) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.footer}>
            <Toolbar className={classes.buttonContainer} style={playerCount > 0 ? { margin: 'auto'} : {}}>
                {(playerCount > 0 && !addAction)&& (
                    <CustomButton
                        variant="contained"
                        onClick={clearBoard}
                        title="Clear board"
                    />
                )}
                {!addAction && (
                    <CustomButton
                        variant="contained"
                        color="warning"
                        onClick={addPlayer}
                        title="Add player"
                        fullWidth={playerCount === 0}
                    />
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Footer;