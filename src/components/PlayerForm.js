import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CustomButton from './Button';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '80%',
        margin: 'auto',
        position:'relative',
        top:'100px',
        padding: theme.spacing(2),
        "& *": {
            margin: theme.spacing(1),
        }
    },
}));

function PlayerForm({name, setName, setScore, savePlayer}) {
    const classes = useStyles();

    return (
        <Grid item className={classes.container}>
            <TextField
                id="player-name"
                label="Name"
                type="text"
                fullWidth
                onChange={e => setName(e.target.value)}
            />
            <TextField
                id="player-score"
                label="Initial score"
                type="number"
                fullWidth
                onChange={e => setScore(e.target.value)}
            />
            <CustomButton
                variant="outlined"
                disableElevation
                onClick={savePlayer}
                title={name.length === 0 ? 'Cancel' : 'Save'}
            />
        </Grid>
    )
}

export default PlayerForm;