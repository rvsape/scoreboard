import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import Footer from './components/Footer';
import { MAX_PLAYERS, COLOR_BANK } from './constants';

// TODO:
// - theme (better styles)
// - animation

const useStyles = makeStyles((theme) => ({
    titleContainer: {
      textAlign: 'center',
      position: 'relative',
      top: '100px'
    }
}));

function App() {
  const classes = useStyles();
  const [players, setPlayers] = useState([]);
  const [addAction, setAddAction] = useState(false);
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [newScore, setNewScore] = useState('');
  const [activeId, setActiveId] = useState(0);
  const [timeoutId, setTimeoutId] = useState(undefined);
  const [colorBank, setColorBank] = useState([...COLOR_BANK]);
  const TIMEOUT = 750;

  const cleanInputs = () => {
    setName('');
    setScore(0);
  }

  const setPlayerColor = () => {
    let color_bank = [...colorBank];
    const colorIndex = Math.floor(Math.random() * color_bank.length);
    const color = color_bank[colorIndex];
    color_bank.splice(colorIndex, 1);
    setColorBank(color_bank);
    return color;
  };

  const addPlayer = () => {
    if (players.length < MAX_PLAYERS) {
      setActiveId(0);
      setAddAction(true);
    }
  }

  const savePlayer = () => {
    setAddAction(false);
    const temp = name.trim();
    if (temp.length === 0) {
      cleanInputs();
      return
    }
    const newPlayer = {
      id: players.length +1,
      name: name,
      score: score,
      color: setPlayerColor(),
    };
    setPlayers([...players, newPlayer])
    cleanInputs();
  }

  const activateScoreInput = (player) => {
    setActiveId(player.id);
  }

  const updateScore = (e) => {
    setNewScore(e.target.value);
  }

  const deletePlayer = (player) => {
    const updatedPlayers = players.filter(p => 
      p.id !== player.id
    )
    setPlayers(updatedPlayers);
  }

  const keyUp = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }
    const scoreToInt = parseInt(newScore);
    let id = setTimeout(() => {
      setTimeoutId(undefined);
      const updatedPlayers = players.map(p => 
        p.id === activeId ? 
          { 
            ...p,
            score: (parseInt(p.score) + (isNaN(scoreToInt) ? 0 : scoreToInt)) }
          : p
      );
      setPlayers(updatedPlayers);
      setActiveId(0);
      setNewScore('');
    }, TIMEOUT);
    setTimeoutId(id)
  }

  const clearBoard = () => {
    setColorBank([...COLOR_BANK]);
    setActiveId(0);
    setPlayers([]);
  }

  return (
    <div>
      <Header />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        style={{
          height: '100%',
          position: 'relative',
        }}
      >
        {!addAction && (
          <React.Fragment>
            {players.length === 0 && (
              <Grid item className={classes.titleContainer}>
                <h2>Begin by adding players!</h2>
              </Grid>
            )}
            <PlayerList
              players={players}
              activeId={activeId}
              activateScoreInput={activateScoreInput}
              keyUp={keyUp}
              updateScore={updateScore}
              newScore={newScore}
              deletePlayer={deletePlayer}
            />
          </React.Fragment>
        )}
        {addAction && (
          <PlayerForm
            name={name}
            setName={setName}
            setScore={setScore}
            savePlayer={savePlayer}
          />
        )}
      </Grid>
      <Footer
        addPlayer={addPlayer}
        addAction={addAction}
        playerCount={players.length}
        clearBoard={clearBoard}
      />
    </div>
  );
}

export default App;
