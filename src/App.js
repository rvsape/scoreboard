import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import Footer from './components/Footer';
// TODO:
// - theme (better styles)
// - animation
// - colored board
const useStyles = makeStyles((theme) => {

});

function App() {
  const [players, setPlayers] = useState([{id: 1, name: 'test', score: 0}]);
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
    setAddAction(true);
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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Header />
        {!addAction && (
          <div>
            {players.length === 0 && (
              <Grid item>
                <h4>Begin by adding players!</h4>
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
          </div>
        )}
        {addAction && (
          <PlayerForm
            name={name}
            setName={setName}
            setScore={setScore}
            savePlayer={savePlayer}
          />
        )}
      <Footer
        addPlayer={addPlayer}
        addAction={addAction}
        playerCount={players.length}
        clearBoard={clearBoard}
      />
    </Grid>
  );
}

export default App;
