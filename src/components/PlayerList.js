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