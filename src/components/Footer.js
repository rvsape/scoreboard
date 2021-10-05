import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CustomButton from './Button';
import { MAX_PLAYERS } from '../constants'

const useStyles = makeStyles((theme) => ({
    footer: {
        top: 'auto',
        bottom: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.down('321')]: {
            padding: theme.spacing(1),
        },
        minHeight: '100px'
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
                {(playerCount > 0 && !addAction) && (
                    <CustomButton
                        variant="outlined"
                        onClick={clearBoard}
                        title="Clear board"
                        color="secondary"
                    />
                )}
                {!addAction && (
                    <CustomButton
                        variant="outlined"
                        color="secondary"
                        onClick={addPlayer}
                        title="Add player"
                        disabled={playerCount === MAX_PLAYERS}
                        fullWidth={playerCount === 0}
                    />
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Footer;