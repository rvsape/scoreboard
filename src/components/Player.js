import React, { forwardRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        textAlign: 'center',
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        position: 'relative'
    },
    listItem: {
        backgroundColor: '#fff',
        border: '3px solid',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        borderRadius: '5px',
        minHeight: '60px',
        fontWeight: 'bold',
    },
    textContainer: {
        minHeight: '40px',
        padding: '8px 0'
    },
    nameContainer: {
        display: 'inline-block',
        width: '90px'
    },
    input: {
        padding: '2px 2px',
        maxWidth: '100px'
    },
    scoreContainer: {
        padding: '10px',
        marginLeft: '20px',
        minHeight: '40px',
    }
}));

const Player = forwardRef(({player, activeId, newScore, keyUp, updateScore, activateScoreInput, deletePlayer}, ref) => {
    const classes = useStyles();

    const scoreDisplay = (player) => {
        if (activeId === player.id) {
            return (
                <span className={classes.scoreContainer}>
                    {player.score} + 
                    <span>
                        <TextField
                            id="newscore"
                            type="number"
                            autoFocus
                            value={newScore}
                            onKeyUp={() => keyUp()}
                            onChange={(e) => updateScore(e)}
                            size="small"
                            InputProps={{
                                classes: {
                                    input: classes.input
                                }
                            }}
                        />
                    </span>
                </span>
            )
        }
        return <span className={classes.scoreContainer} onClick={() => activateScoreInput(player)}>{player.score}</span>
    }
    
    return (
        <Grid item xs={12} md={12} key={player.id} ref={ref}>
            <List className={classes.itemContainer}>
                <ListItem className={classes.listItem} style={{ 'borderColor': player.color}}>
                    <ListItemIcon>
                        <DeleteSharpIcon 
                            onClick={() => deletePlayer(player)}
                            style={{ 'color': player.color }}
                        />
                    </ListItemIcon>
                    <ListItemText className={classes.textContainer}>
                        <span className={classes.nameContainer}>
                            {player.name}
                        </span>
                        {scoreDisplay(player)}
                    </ListItemText>
                </ListItem>
            </List>
        </Grid>
    );
})

export default Player;