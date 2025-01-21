export const makeCPUMoveEasy = (
  board: ('red' | 'yellow' | null)[][],
  dropCoin: (columnIndex: number, setDroppingCell: React.Dispatch<React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>>) => { rowIndex: number; columnIndex: number } | null,
  setDroppingCell: React.Dispatch<React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>>,
  setWinner: (winner: 'Player 1' | 'Player 2' | 'tie' | null) => void,
  setGameOver: (isGameOver: boolean) => void,
  gameOver: boolean
) => {
  if (gameOver) return;

  // Find available columns
  const availableColumns = board[0].map((cell, colIndex) => (!cell ? colIndex : null)).filter((col) => col !== null);

  // If no columns are available, it's a tie
  if (availableColumns.length === 0) {
    setWinner('tie');
    setGameOver(true);
    return;
  }

  // Pick a random available column
  const randomCol = availableColumns[Math.floor(Math.random() * availableColumns.length)] as number;

  // Call dropCoin and trigger the animation
  const result = dropCoin(randomCol, setDroppingCell);
  

  if (result) {
    setDroppingCell({ rowIndex: result.rowIndex, columnIndex: randomCol }); // Trigger animation
  } else {
    console.error('CPU failed to drop a coin.');
  }
};


export const makeCPUMoveMedium = (
  board: (string | null)[][],
  dropCoin: (
    columnIndex: number,
    setDroppingCell: React.Dispatch<
      React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>
    >
  ) => { rowIndex: number; columnIndex: number } | null,
  setDroppingCell: React.Dispatch<
    React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>
  >,
  setWinner: (winner: 'Player 1' | 'Player 2' | 'tie' | null) => void,
  setGameOver: (isGameOver: boolean) => void,
  gameOver: boolean,
  checkWin: (
    board: (string | null)[][],
    row: number,
    col: number,
    callback: () => void
  ) => boolean // Add checkWin explicitly
) => {
  if (gameOver) return;

  const cpuColor = "yellow"; // CPU is Player 2
  const playerColor = "red"; // Player 1

  // Helper function to simulate placing a coin
  const simulateMove = (
    board: (string | null)[][],
    row: number,
    col: number,
    color: string
  ): boolean => {
    const tempBoard = board.map((row) => [...row]); // Clone the board
    tempBoard[row][col] = color;
    return checkWin(tempBoard, row, col, () => {}); // Call checkWin correctly
  };
  // Find all available columns
  const availableColumns: number[] = [];
  for (let col = 0; col < 7; col++) {
    if (!board[0][col]) availableColumns.push(col); // Topmost row is empty
  }



  // Check for a winning move for the CPU
  for (const col of availableColumns) {
    for (let row = 5; row >= 0; row--) {
      if (!board[row][col]) {
        if (simulateMove(board, row, col, cpuColor)) {
      
          const result = dropCoin(col, setDroppingCell);
          if (result) {
            setDroppingCell({
              rowIndex: result.rowIndex,
              columnIndex: result.columnIndex,
            });
          }
          return;
        }
        break; // Stop checking further rows in this column
      }
    }
  }

  // Check for a blocking move to prevent the player from winning
  for (const col of availableColumns) {
    for (let row = 5; row >= 0; row--) {
      if (!board[row][col]) {
        if (simulateMove(board, row, col, playerColor)) {
        
          const result = dropCoin(col, setDroppingCell);
          if (result) {
            setDroppingCell({
              rowIndex: result.rowIndex,
              columnIndex: result.columnIndex,
            });
          }
          return;
        }
        break; // Stop checking further rows in this column
      }
    }
  }

  // Fallback to a random move if no winning or blocking moves are found
  const randomCol =
    availableColumns[Math.floor(Math.random() * availableColumns.length)];

  const result = dropCoin(randomCol, setDroppingCell);
  if (result) {
    setDroppingCell({
      rowIndex: result.rowIndex,
      columnIndex: result.columnIndex,
    });
  }
};


export const makeCPUMoveHard = (
  board: (string | null)[][],
  dropCoin: (
    columnIndex: number,
    setDroppingCell: React.Dispatch<
      React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>
    >
  ) => { rowIndex: number; columnIndex: number } | null,
  setDroppingCell: React.Dispatch<
    React.SetStateAction<{ rowIndex: number; columnIndex: number } | null>
  >,
  gameOver: boolean,
  checkTie: (board: (string | null)[][]) => boolean
) => {
  if (gameOver) return;

  const cpuColor = "yellow"; // CPU is Player 2
  const playerColor = "red"; // Player 1
  const maxDepth = 6; // Depth of lookahead for harder AI

  // Step 1: Helper to find available row for a column
  const getAvailableRow = (board: (string | null)[][], col: number): number | null => {
    for (let row = 5; row >= 0; row--) {
      if (!board[row][col]) return row;
    }
    return null; // Column is full
  };

  // Step 2: Prioritize Center Column
  const prioritizeCenter = (columns: number[]) => {
    return columns.sort((a, b) => {
      const center = 3; // Center column index
      return Math.abs(a - center) - Math.abs(b - center);
    });
  };

  // Step 3: Evaluate Board for Offensive and Defensive Value
  const evaluateBoard = (board: (string | null)[][]): number => {
    let score = 0;
  
    // Helper to score a specific position
    const scorePosition = (line: (string | null)[]) => {
      const cpuCount = line.filter((cell) => cell === cpuColor).length;
      const playerCount = line.filter((cell) => cell === playerColor).length;
  
      // Mixed line (both player and CPU present): No score
      if (cpuCount > 0 && playerCount > 0) return 0;
  
      // Stronger weights for critical scenarios
      if (cpuCount === 4) return 100000; // CPU wins
      if (playerCount === 4) return -100000; // Player wins
      if (cpuCount === 3) return 100; // CPU's strong alignment
      if (playerCount === 3) return -500; // Player's strong alignment (needs blocking)
      if (cpuCount === 2) return 10; // CPU's potential alignment
      if (playerCount === 2) return -50; // Player's potential alignment
  
      return 0;
    };
  
    const directions = [
      { dr: 0, dc: 1 }, // Horizontal
      { dr: 1, dc: 0 }, // Vertical
      { dr: 1, dc: 1 }, // Diagonal right
      { dr: 1, dc: -1 }, // Diagonal left
    ];
  
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        for (const { dr, dc } of directions) {
          const line = [];
          for (let k = 0; k < 4; k++) {
            const r = row + dr * k;
            const c = col + dc * k;
            if (r >= 0 && r < 6 && c >= 0 && c < 7) {
              line.push(board[r][c]);
            }
          }
          score += scorePosition(line);
        }
      }
    }
  
    // Center column bonus
    for (let row = 0; row < 6; row++) {
      if (board[row][3] === cpuColor) score += 5; // Center column is valuable
      else if (board[row][3] === playerColor) score -= 5;
    }
  
    return score;
  };

  // Step 4: Minimax Algorithm with Center Prioritization
  const minimax = (
    board: (string | null)[][],
    depth: number,
    alpha: number,
    beta: number,
    isMaximizing: boolean
  ): { score: number; column: number | null } => {
    if (depth === 0 || checkTie(board) || gameOver) {
      return { score: evaluateBoard(board), column: null };
    }

    const availableColumns = [];
    for (let col = 0; col < 7; col++) {
      if (!board[0][col]) availableColumns.push(col);
    }

    let bestColumn: number | null = null;

    const prioritizedColumns = prioritizeCenter(availableColumns);

    if (isMaximizing) {
      let maxEval = -Infinity;

      for (const col of prioritizedColumns) {
        const row = getAvailableRow(board, col);
        if (row !== null) {
          const newBoard = board.map((row) => [...row]);
          newBoard[row][col] = cpuColor;

          const { score } = minimax(newBoard, depth - 1, alpha, beta, false);

          if (score > maxEval) {
            maxEval = score;
            bestColumn = col;
          }
          alpha = Math.max(alpha, score);
          if (beta <= alpha) break; // Prune the branch
        }
      }

      return { score: maxEval, column: bestColumn };
    } else {
      let minEval = Infinity;

      for (const col of prioritizedColumns) {
        const row = getAvailableRow(board, col);
        if (row !== null) {
          const newBoard = board.map((row) => [...row]);
          newBoard[row][col] = playerColor;

          const { score } = minimax(newBoard, depth - 1, alpha, beta, true);

          if (score < minEval) {
            minEval = score;
            bestColumn = col;
          }
          beta = Math.min(beta, score);
          if (beta <= alpha) break; // Prune the branch
        }
      }

      return { score: minEval, column: bestColumn };
    }
  };

  // Execute Minimax to Find Best Move
  const { column: bestMove } = minimax(board, maxDepth, -Infinity, Infinity, true);

  // Drop the Coin
  if (bestMove !== null) {
    const result = dropCoin(bestMove, setDroppingCell);
    if (result) {
      setDroppingCell({
        rowIndex: result.rowIndex,
        columnIndex: result.columnIndex,
      });
    }
  }
};
