
import { useState } from 'react';
import './App.css';
import PokemonListContainer from './components/PokemonListContainer';

function App() {
  const [count, setCount] = useState(0)
  //const [resetCount, setResetCount] = useState(0)

 function resetCount() {
  setCount(0);
    /* const resetCounter = () => {
      setResetCount(0);
      //setBestScore(0);
    }
    return (
      <button onClick={resetCounter} type="reset">Reset</button>
    )  */
  } 

  function handleCounter() {
    setCount(count + 1);
    /* console.log("hello handle counter");
    const setCounter = () => {
      setCount(count + 1);
      console.log("count");
    } */
  }

  return (
    <>
      <h1>Pokémon Memory</h1>
      <h2>Rating</h2>
      <div className="counter">
        <div className="score">
          <h3>Score: </h3>
          <p className="scoreUp">{count}</p>
        </div>
        <div className="bestscore">
          <h3>Bestscore: </h3>
          <p>0</p>
        </div>
        <div>
          <button onClick={resetCount} type="reset">Reset</button>
        </div>
      </div>
      <PokemonListContainer handleCounter={handleCounter} />
    </>
  )
}

export default App
