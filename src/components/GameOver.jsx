/* eslint-disable react/prop-types */
import "./GameOver.css";

const GameOver = ({retry}) => {
  return (
    <div>
      <h2>Game Over</h2>
      <button onClick={retry}>Reiniciar o Game</button>
    </div>
  )
}

export default GameOver;
