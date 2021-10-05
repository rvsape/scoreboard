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

const setColor = () => {
  console.log('function: setColor');
  const colorIndex = Math.floor(Math.random() * COLOR_BANK.length);
  const color = COLOR_BANK[colorIndex];
  COLOR_BANK.splice(colorIndex, 1);
  console.log('colors left: ', COLOR_BANK.length);
  console.log('content:', COLOR_BANK);
  return color;
};

const testPool = [
  {id: 1, name: 'first', score: 0, color: setColor()},
  {id: 2, name: 'test', score: 0, color: setColor()},
  {id: 3, name: 'test', score: 0, color: setColor()},
  {id: 4, name: 'test', score: 0, color: setColor()},
  {id: 5, name: 'test', score: 0, color: setColor()},
  {id: 6, name: 'test', score: 0, color: setColor()},
  {id: 7, name: 'test', score: 0, color: setColor()},
  {id: 8, name: 'test', score: 0, color: setColor()},
  {id: 756, name: 'test', score: 0, color: setColor()},
  {id: 43, name: 'test', score: 0, color: setColor()},
  {id: 42, name: 'last', score: 0, color: setColor()}
]

function App() {
  const classes = useStyles();
  const [players, setPlayers] = useState(testPool);
  const [addAction, setAddAction] = useState(false);
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [newScore, setNewScore] = useState('');
  const [activeId, setActiveId] = useState(0);
  const [timeoutId, setTimeoutId] = useState(undefined);
  const TIMEOUT = 750;

  const cleanInputs = () => {
    setName('');
    setScore(0);
  }

  const addPlayer = () => {
    if (players.length < MAX_PLAYERS) {
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
      color: setColor(),
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
