import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import Footer from './components/Footer';
import { MAX_PLAYERS, COLOR_BANK, STORE_KEY } from './constants';

// TODO:
// - theme (better styles)

const useStyles = makeStyles((theme) => ({
    titleContainer: {
      textAlign: 'center',
      position: 'relative',
      top: '100px'
    },
    container: {
      height: '100%',
      position: 'relative',
      minWidth: '360px'
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

  useEffect(() => {
    let prevBoard = localStorage.getItem(STORE_KEY);
    if (prevBoard !== null) {
      let parsed = JSON.parse(prevBoard);
      setPlayers(parsed);
      const parseColorBank = colorBank.filter(color => {
        const colorInUse = parsed.findIndex(p => p.color === color);
        if (colorInUse >= 0) {
          return false;
        } else {
          return true;
        }
      });
      setColorBank(parseColorBank);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(players));
  }, [players])

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

  const sortPlayersByScore = (newScores) => {
    const sortedPlayers = newScores.sort((a, b) => {
      return b.score - a.score
    })
    setPlayers(sortedPlayers);
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
    if (score > 0) {
      sortPlayersByScore([...players, newPlayer]);
    } else {
      setPlayers([...players, newPlayer]);
    }
    
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
      sortPlayersByScore(updatedPlayers);
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

  const resetScores = () => {
    const resetPlayerScores = players.map(p => {
      return {
        ...p,
        score: 0
      }
    });
    setPlayers(resetPlayerScores);
  }

  return (
    <div>
      <Header />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        className={classes.container}
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
        resetScores={resetScores}
      />
    </div>
  );
}

export default App;
