import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BoardContainer } from "./Board.styles";
import blackBoard from '../../../../../public/assets/images/board-layer-black-small.svg';
import whiteBoard from '../../../../../public/assets/images/board-layer-white-small.svg';
import blackBoardLarge from '../../../../../public/assets/images/board-layer-black-large.svg';
import whiteBoardLarge from '../../../../../public/assets/images/board-layer-white-large.svg';
import redMarker from '../../../../../public/assets/images/marker-red.svg';
import yellowMarker from '../../../../../public/assets/images/marker-yellow.svg';

interface BoardProps {
  board: ('red' | 'yellow' | null)[][];
  dropCoin: (
    columnIndex: number,
    setDroppingCell: React.Dispatch<
      React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>
    >
  ) => { rowIndex: number; columnIndex: number } | null;
  winningCells: [number, number][]; 
  currentWinningIndex: number | null;
  currentPlayer: 'Player 1' | 'Player 2';
  mode: "vsCPU" | "vsPlayer" | null;
  droppingCell: { rowIndex: number; columnIndex: number } | null;
  setDroppingCell: React.Dispatch<
    React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>
  >;
  gameOver: boolean;
}

const Board: React.FC<BoardProps> = ({ board, dropCoin, winningCells, currentWinningIndex, currentPlayer, mode, droppingCell, setDroppingCell, gameOver }) => {
  const [markerPosition, setMarkerPosition] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen size
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia('(min-width: 768px)').matches);
    };

    // Add event listener to track screen size changes
    handleResize(); // Check the screen size on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCellClick = (columnIndex: number) => {
    if (mode === "vsCPU" && currentPlayer === "Player 2") {
      return;
    }
    const newCoinPosition = dropCoin(columnIndex, setDroppingCell);
    if (newCoinPosition) {
      setTimeout(() => setDroppingCell(null), 500); // Clear animation state
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const boardRect = event.currentTarget.getBoundingClientRect();
    const columnWidth = boardRect.width / board[0].length;
    const offsetX = event.clientX - boardRect.left;
    const column = Math.floor(offsetX / columnWidth);
  
    // Adjust marker to center above column
    const columnCenter = column * columnWidth + columnWidth / 2;
    setMarkerPosition(columnCenter - 330); // Adjust for marker width
  };

   const handleMouseLeave = () => {
    setMarkerPosition(null);
  };

  return (
    <BoardContainer>
       {isLargeScreen && !gameOver && markerPosition !== null && (
        <div className="marker-container">
          <Image
            src={
              mode === 'vsCPU'
                ? redMarker
                : currentPlayer === 'Player 1'
                ? redMarker
                : yellowMarker
            }
            alt={`${currentPlayer} marker`}
            className="marker"
            style={{
              left: markerPosition, 
            }}
          />
        </div>
      )}

      <Image
        src={isLargeScreen ? blackBoardLarge : blackBoard}
        alt="Black Board Layer"
        className="black-board"
      />

      <div
        className="game-grid"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, columnIndex) => {
              const isWinningCell = winningCells.some(([r, c]) => r === rowIndex && c === columnIndex);
              const isDropping = droppingCell?.rowIndex === rowIndex && droppingCell?.columnIndex === columnIndex;

              return (
                <div
                  key={`${rowIndex}-${columnIndex}`}
                  className={`board-cell ${isDropping ? 'dropping' : ''}`}
                  onClick={() => handleCellClick(columnIndex)}
                  style={{
                    '--drop-distance': `${rowIndex * 44}px`,
                    backgroundImage: cell === 'yellow'
                      ? `url('/assets/images/counter-yellow-small.svg')`
                      : cell === 'red'
                      ? `url('/assets/images/counter-red-small.svg')`
                      : 'none',
                  } as React.CSSProperties}
                >
                  {isWinningCell && currentWinningIndex !== null && winningCells.findIndex(([r, c]) => r === rowIndex && c === columnIndex) <= currentWinningIndex && (
                    <div className="winning-circle"></div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <Image
        src={isLargeScreen ? whiteBoardLarge : whiteBoard}
        alt="White Board Layer"
        className="white-board"
      />
    </BoardContainer>
  );
};

export default Board;





