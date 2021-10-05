import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CustomButton from './Button';

import { MAX_NAME_LENGTH } from '../constants';

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
    lengthDisplay: {
        position: 'relative',
        right: '0',
        textAlign: 'end',
        margin: '0px',
    }
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
                inputProps={{
                    maxLength: MAX_NAME_LENGTH
                }}
                onChange={e => setName(e.target.value)}
                style={{
                    marginBottom: '2px'
                }}
            />
            <div className={classes.lengthDisplay}>
                {MAX_NAME_LENGTH - name.length}
            </div>
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