import {
  CurrentPlayerBox,
  CurrentPlayerBoxContent,
  CurrentPlayerText,
  TimeLeftText,
  EndGameBox,
  WinnerText,
  StatusText,
  Button,
} from "./CurrentPlayerDisplay.styles";

type CurrentPlayerDisplayProps = {
  currentPlayer: "Player 1" | "Player 2";
  timeLeft: number;
  gameOver: boolean;
  winner: "Player 1" | "Player 2" | "tie" | null;
  handlePlayAgain: () => void;
  isCPU: boolean; // New prop for identifying if Player 2 is CPU
};

const CurrentPlayerDisplay: React.FC<CurrentPlayerDisplayProps> = ({
  currentPlayer,
  timeLeft,
  gameOver,
  winner,
  handlePlayAgain,
  isCPU,
}) => {
  // Determine the winning text based on the winner and whether the opponent is CPU
  const winnerText =
    winner === "Player 1" && isCPU
      ? "You"
      : winner === "Player 2" && isCPU
      ? "CPU"
      : winner === "tie"
      ? "Game"
      : winner;

  // Determine the status text (Win, Wins, or Tied)
  const statusText =
    winner === "tie"
      ? "Tied"
      : winner === "Player 1" && isCPU
      ? "Win"
      : "Wins";

  // Determine the current player text based on mode (vsCPU)
  const currentPlayerText =
    currentPlayer === "Player 1" && isCPU
      ? "Your Turn"
      : currentPlayer === "Player 2" && isCPU
      ? "CPU's Turn"
      : `${currentPlayer}'s turn`;

  return (
    <CurrentPlayerBox
      $isPlayer1Turn={currentPlayer === "Player 1"}
      $gameOver={gameOver}
      $winner={winner}
    >
      {!gameOver ? (
        <CurrentPlayerBoxContent
          $isPlayer1Turn={currentPlayer === "Player 1"}
          $gameOver={gameOver}
        >
          <CurrentPlayerText
            $isPlayer1Turn={currentPlayer === "Player 1"}
            $gameOver={gameOver}
          >
            {currentPlayerText}
          </CurrentPlayerText>
          <TimeLeftText
            $isPlayer1Turn={currentPlayer === "Player 1"}
            $gameOver={gameOver}
          >
            {timeLeft}s
          </TimeLeftText>
        </CurrentPlayerBoxContent>
      ) : (
        <EndGameBox>
          <WinnerText>{winnerText}</WinnerText>
          <StatusText>{statusText}</StatusText>
          <Button onClick={handlePlayAgain}>Play Again</Button>
        </EndGameBox>
      )}
    </CurrentPlayerBox>
  );
};

export default CurrentPlayerDisplay;
