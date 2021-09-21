import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    listContainer: {
        textAlign: 'center',
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1)
    },
    listItem: {
        backgroundColor: '#fff',
        border: '1px solid black',
        padding: theme.spacing(1),
        borderRadius: '5px'
    }
}));

function PlayerList({players, activeId, activateScoreInput, keyUp, deletePlayer, updateScore, newScore}) {
    const classes = useStyles();
    const scoreDisplay = (player) => {
        if (activeId === player.id) {
            return (
                <span style={{ 'padding': '10px'}}>
                    {player.score} + 
                    <span>
                    <TextField
                        id="newscore"
                        type="number"
                        value={newScore}
                        onKeyUp={() => keyUp()}
                        onChange={(e) => updateScore(e)}
                        style={{
                            paddingLeft: '15px',
                            paddingTop: '1px'
                        }}
                        size="small"
                    />
                    </span>
                </span>
            )
        }
        return <span style={{ 'paddingLeft': '10px'}} onClick={() => activateScoreInput(player)}>{player.score}</span>
    }

    return players.map((player) => {
        return (
            <Grid item xs={12} md={12} key={player.id}>
                <List className={classes.listContainer}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <DeleteSharpIcon onClick={() => deletePlayer(player)} />
                        </ListItemIcon>
                        <ListItemText>
                            {player.name}
                            {scoreDisplay(player)}
                        </ListItemText>
                    </ListItem>
                </List>
            </Grid>
        )
    });
}

export default PlayerList;