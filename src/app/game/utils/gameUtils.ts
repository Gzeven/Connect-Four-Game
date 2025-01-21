export const checkWin = (
  board: (string | null)[][],
  row: number,
  col: number,
  setWinningCells: (cells: [number, number][]) => void
): boolean => {
  const directions = [
    { r: 0, c: 1 },   // Horizontal
    { r: 1, c: 0 },   // Vertical
    { r: 1, c: 1 },   // Diagonal Down-Right
    { r: 1, c: -1 }   // Diagonal Down-Left
  ];

  const currentColor = board[row][col];

  for (const { r, c } of directions) {
    let count = 1;
    const tempWinningCells: [number, number][] = [[row, col]]; // Explicitly type as array of tuples

    // Check one direction
    for (let i = 1; i < 4; i++) {
      const newRow = row + r * i;
      const newCol = col + c * i;
      if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 && board[newRow][newCol] === currentColor) {
        count++;
        tempWinningCells.push([newRow, newCol]); // Add to winning cells
      } else {
        break;
      }
    }

    // Check the opposite direction
    for (let i = 1; i < 4; i++) {
      const newRow = row - r * i;
      const newCol = col - c * i;
      if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 && board[newRow][newCol] === currentColor) {
        count++;
        tempWinningCells.push([newRow, newCol]); // Add to winning cells
      } else {
        break;
      }
    }

    if (count >= 4) {
      // Sort the winning cells first by column, then by row
      tempWinningCells.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0]; // Sort by row if columns are equal
        return a[1] - b[1]; // Sort by column
      });
      setWinningCells(tempWinningCells); // Save the winning cells
      return true;
    }
  }

  return false;
};


export const checkTie = (board: (string | null)[][]): boolean => {
  return board.every(row => row.every(cell => cell !== null));
};
