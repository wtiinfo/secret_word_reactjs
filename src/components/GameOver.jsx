/* eslint-disable react/prop-types */
import "./GameOver.css";

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <h2>Sua Pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar o Game</button>
    </div>
  )
}

export default GameOver;
