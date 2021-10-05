import { createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AnimateList from './AnimateList';
import Player from './Player'

const useStyles = makeStyles((theme) => ({
    listContainer: {
        position: 'relative',
        paddingBottom: '100px',
        top: '100px'
    },
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

function PlayerList({players, activeId, activateScoreInput, keyUp, deletePlayer, updateScore, newScore}) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={12}
            className={classes.listContainer}
        >
            <AnimateList>
                {players.map(player => (
                    <Player
                        key={player.id}
                        player={player}
                        activeId={activeId}
                        activateScoreInput={activateScoreInput}
                        keyUp={keyUp}
                        deletePlayer={deletePlayer}
                        updateScore={updateScore}
                        newScore={newScore}
                        ref={createRef()}
                    />
                ))}
            </AnimateList>
        </Grid>
    )
}

export default PlayerList;