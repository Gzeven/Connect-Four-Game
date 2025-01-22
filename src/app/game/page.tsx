// 'use client';
// import { useEffect, useRef, useState, useCallback } from 'react';
// import { useRouter } from 'next/navigation';
// import { GameContainer, GameContent } from './styles';
// import TopBar from './components/TopBar/TopBar';
// import PlayerInfo from './components/PlayerInfo/PlayerInfo';
// import CurrentPlayerDisplay from './components/CurrentPlayerDisplay/CurrentPlayerDisplay';
// import Board from './components/Board/Board';
// import { checkWin, checkTie } from './utils/gameUtils';
// import { makeCPUMoveEasy, makeCPUMoveMedium, makeCPUMoveHard } from './utils/cpuLogic';


// type PlayerType = "Player 1" | "Player 2";
// type WinnerType = "Player 1" | "Player 2" | "tie" | null;

// type GamePageProps = {
//   mode: "vsCPU" | "vsPlayer" | null;
//   difficulty: "easy" | "medium" | "hard" | null;
// };

// // Initial empty board
// const createEmptyBoard = () => Array.from({ length: 6 }, () => Array(7).fill(null));

// export default function GamePage({ mode, difficulty }: GamePageProps) {
//   const [board, setBoard] = useState(createEmptyBoard());
//   const [currentPlayer, setCurrentPlayer] = useState<PlayerType>("Player 1");
//   const [gameOver, setGameOver] = useState(false);
//   const [winner, setWinner] = useState<WinnerType | null>(null);
//   const [player1Score, setPlayer1Score] = useState(0);
//   const [player2Score, setPlayer2Score] = useState(0);
//   const [winningCells, setWinningCells] = useState<[number, number][]>([]);
//   const [currentWinningIndex, setCurrentWinningIndex] = useState<number | null>(null); // State for current winning index
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [startingPlayer, setStartingPlayer] = useState<PlayerType>('Player 1');


// const timerDuration = 30;
// const [timeLeft, setTimeLeft] = useState(timerDuration); 
// const timerStarted = useRef(false); // Ref to track if the timer has started
// const timeoutTriggered = useRef(false); // Ref to track if timeout was triggered
// const router = useRouter();
// // const searchParams = useSearchParams();
// // const mode = searchParams.get('mode') as 'vsCPU' | 'vsPlayer' | null;
// // const difficulty = searchParams.get('difficulty') as 'easy' | 'medium' | 'hard';

// const [droppingCell, setDroppingCell] = useState<{ rowIndex: number; columnIndex: number } | null>(null);
// const [cpuMoveInProgress, setCpuMoveInProgress] = useState(false);

// const updateScore = useCallback((player: string, points: number) => {
//   if (player === "Player 1") {
//     setPlayer1Score((prevScore) => prevScore + points);
//   } else if (player === "Player 2") {
//     setPlayer2Score((prevScore) => prevScore + points);
//   }
// }, []);

// const dropCoin = useCallback(
//   (
//     columnIndex: number,
//     setDroppingCell: React.Dispatch<
//       React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>
//     >,
//     isCPUMove = false
//   ): { rowIndex: number; columnIndex: number } | null => {
//     if (gameOver) return null;

//     const newBoard = [...board];
//     for (let row = newBoard.length - 1; row >= 0; row--) {
//       if (!newBoard[row][columnIndex]) {
//         const currentColor = currentPlayer === "Player 1" ? "red" : "yellow";
//         newBoard[row][columnIndex] = currentColor;

//         setDroppingCell({ rowIndex: row, columnIndex });

//         const delay = isCPUMove ? 500 : 0;

//         setTimeout(() => {
//           setBoard(newBoard);

//           if (checkWin(newBoard, row, columnIndex, setWinningCells)) {
//             setWinner(currentPlayer);
//             updateScore(currentPlayer, 1);
//             setGameOver(true);
//           } else if (checkTie(newBoard)) {
//             setWinner("tie");
//             setGameOver(true);
//           } else {
//             setCurrentPlayer((prev) =>
//               prev === "Player 1" ? "Player 2" : "Player 1"
//             );
//           }
//         }, delay);

//         return { rowIndex: row, columnIndex };
//       }
//     }
//     console.error("Column Full or Invalid:", { columnIndex });
//     return null;
//   },
//   [board, currentPlayer, gameOver, updateScore]
// );

// const handleCPUMove = useCallback(() => {
//   if (gameOver || cpuMoveInProgress) return; // Don't proceed if the game is over or another CPU move is in progress

//   setCpuMoveInProgress(true); // Set the flag to indicate a CPU move is in progress

//   setTimeout(() => {
//     const cpuDropCoin = (columnIndex: number) =>
//       dropCoin(columnIndex, setDroppingCell);

//     switch (difficulty) {
//       case "easy":
//         makeCPUMoveEasy(
//           board,
//           cpuDropCoin,
//           setDroppingCell,
//           setWinner,
//           setGameOver,
//           gameOver
//         );
//         break;
//       case "medium":
//         makeCPUMoveMedium(
//           board,
//           cpuDropCoin,
//           setDroppingCell,
//           setWinner,
//           setGameOver,
//           gameOver,
//           checkWin
//         );
//         break;
//       case "hard":
//         makeCPUMoveHard(
//           board,
//           cpuDropCoin, // Pass cpuDropCoin first
//           setDroppingCell,
//           gameOver, // Pass gameOver after setDroppingCell
//           checkTie
//         );
//         break;
//       default:
//         console.error("Invalid difficulty selected:", difficulty);
//     }

//     setCpuMoveInProgress(false); // Reset the flag after the move
//   }, 700); // Delay matches the animation duration (700ms)
// }, [
//   board,
//   cpuMoveInProgress,
//   difficulty,
//   dropCoin,
//   gameOver,
//   setDroppingCell,
//   setGameOver,
//   setWinner,
// ]);



// const handleTimeout = useCallback(() => {
//   if (gameOver || timeoutTriggered.current) return; // Prevent score update if the game is already over or timeout already handled

//   const scoringPlayer = currentPlayer === "Player 1" ? "Player 2" : "Player 1";

//   // Update the score for the player who is not the current player.
//   updateScore(scoringPlayer, 1);

//   // Set the winner to the player who scored due to the timeout
//   setWinner(scoringPlayer);
//   setGameOver(true); // Mark the game as over
// }, [gameOver, currentPlayer, updateScore]);


// useEffect(() => {
//   if (gameOver && winner && winningCells.length > 0) {
//     let index = 0;
//     const interval = setInterval(() => {
//       setCurrentWinningIndex(index);
//       index++;
      
//       if (index >= winningCells.length) {
//         clearInterval(interval);
//       }
//     }, 500);

//     return () => clearInterval(interval);
//   }
// }, [gameOver, winner, winningCells]);


// useEffect(() => {
//     // Reset the timer and flags when the current player changes
//     setTimeLeft(timerDuration);
//     timerStarted.current = false; // Reset the timer start flag
//     timeoutTriggered.current = false; // Reset the timeout trigger flag
//   }, [currentPlayer]);


//   useEffect(() => {
//     let timerInterval: NodeJS.Timeout | null = null;
  
//     // Start the timer if the menu is not open, game is not over, and timer hasn't started
//     if (!gameOver && !isMenuOpen && !timerStarted.current) {
//       timerStarted.current = true;
  
//       timerInterval = setInterval(() => {
//         setTimeLeft((prevTime) => {
//           if (prevTime <= 1) {
//             clearInterval(timerInterval!);
//             if (!gameOver && !timeoutTriggered.current) {
//               handleTimeout(); // Handle timeout
//               timeoutTriggered.current = true; // Mark timeout as triggered
//             }
//             return 0; // Ensure timer stops at 0
//           }
//           return prevTime - 1; // Decrease time by 1 second
//         });
//       }, 1000);
//     }
  
//     // Pause timer if menu is opened
//     if (isMenuOpen && timerStarted.current) {
//       clearInterval(timerInterval!); // Clear the interval when the menu is opened
//       timerStarted.current = false; // Allow the timer to restart once menu is closed
//     }
  
//     // Cleanup the interval on unmount or game over
//     return () => {
//       if (timerInterval) {
//         clearInterval(timerInterval);
//       }
//     };
//   }, [gameOver, isMenuOpen, currentPlayer, handleTimeout]);
  
//   useEffect(() => {
//     if (mode === "vsCPU" && currentPlayer === "Player 2" && !gameOver && !cpuMoveInProgress) {
//       handleCPUMove();
//     }
//   }, [currentPlayer, gameOver, mode, cpuMoveInProgress, handleCPUMove]);

 
//   // Reset the game state
//   const handlePlayAgain = () => {
//     const newBoard = createEmptyBoard();
//     setBoard(newBoard);
//     setGameOver(false);
//     setWinner(null);
//     setWinningCells([]);
//     setCurrentWinningIndex(null); // Reset donut index
//     setTimeLeft(timerDuration); // Reset the timer to 30 seconds
//     timerStarted.current = false; // Reset the timer start flag
//     timeoutTriggered.current = false; // Reset the timeout flag
//     setCurrentPlayer(startingPlayer);
//     setStartingPlayer((prev) => {
//       const nextStartingPlayer = prev === "Player 1" ? "Player 2" : "Player 1";
//       setCurrentPlayer(nextStartingPlayer); // Ensure the current player is updated
//       return nextStartingPlayer; // Return the updated starting player
//     });

    
//   };
  
//   // Restart the game with scores reset
//   const handleRestart = () => {
//     const newBoard = createEmptyBoard();
//     setBoard(newBoard);
//     setGameOver(false);
//     setWinner(null);
//     setPlayer1Score(0);
//     setPlayer2Score(0);
//     setStartingPlayer("Player 1"); // Reset starting player to Player 1
//     setCurrentPlayer("Player 1");
//     setWinningCells([]);
//     setCurrentWinningIndex(null); // Reset donut index
//     setIsMenuOpen(false);
//     setTimeLeft(timerDuration); // Reset the timer to 30 seconds
//     timerStarted.current = false; // Reset the timer start flag
//     timeoutTriggered.current = false; // Reset the timeout flag
//   };

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleContinue = () => {
//     setIsMenuOpen(false);
//   };


//   const handleQuit = () => {
//     router.push('/');
//   };

//   return (
//     <GameContainer>
//       <TopBar
//         handleMenuToggle={handleMenuToggle}
//         handleRestart={handleRestart}
//         handleContinue={handleContinue}
//         handleQuit={handleQuit}
//         isMenuOpen={isMenuOpen}
//       />
//       <GameContent>
//         <PlayerInfo player1Score={player1Score} player2Score={player2Score} isCPU={mode === "vsCPU"} />
//         <Board
//   board={board}
//   dropCoin={dropCoin}
//   winningCells={winningCells}
//   currentWinningIndex={currentWinningIndex}
//   currentPlayer={currentPlayer}
//   mode={mode}
//   droppingCell={droppingCell} // Pass the state
//   setDroppingCell={setDroppingCell} // Pass the setter
//   gameOver={gameOver}
  
  
// />
// <CurrentPlayerDisplay
//   currentPlayer={currentPlayer}
//   timeLeft={timeLeft}
//   gameOver={gameOver}
//   winner={winner}
//   handlePlayAgain={handlePlayAgain}
//   isCPU={mode === "vsCPU"}

// />
//       </GameContent>
//     </GameContainer>
//   );
// } 

'use client';

import GameClient from './GameClient';

export default function Page() {
  return <GameClient />;
}