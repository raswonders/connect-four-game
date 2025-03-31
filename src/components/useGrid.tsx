import { useState } from "react";

const playerAI = -1 as const;
const playerOne = 1 as const;
const playerTwo = 2 as const;
const playerEmpty = 0 as const;

export type Player = -1 | 0 | 1 | 2;

export function useGrid(rows: number, cols: number) {
  const [grid, setGrid] = useState<Player[][]>(
    Array.from({ length: rows }, () => {
      return Array(cols).fill(0);
    })
  );

  function addDisc(col: number, player: Player) {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      for (let row = rows - 1; row >= 0; row--) {
        if (newGrid[row][col] === 0) {
          newGrid[row][col] = player;
          break;
        }
      }
      return newGrid;
    });
  }

  function getDiscs() {
    return grid.flat();
  }

  function isGameWon(player: Player): boolean {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === player) {
          return victoryCheck(player, row, col);
        }
      }
    }
    return false;
  }

  function victoryCheck(player: Player, row: number, col: number): boolean {
    return (
      rightCheck(player, row, col) ||
      downCheck(player, row, col) ||
      downRightCheck(player, row, col) ||
      downLeftCheck(player, row, col)
    );
  }
  function rightCheck(player: Player, row: number, col: number) {
    for (let c = col + 1; c < col + 4; c++) {
      if (c >= cols) {
        return false;
      }
      if (grid[row][c] !== player) {
        return false;
      }
    }
    return true;
  }

  function downCheck(player: Player, row: number, col: number) {
    for (let r = row + 1; r < row + 4; r++) {
      if (r >= rows) {
        return false;
      }
      if (grid[r][col] !== player) {
        return false;
      }
    }
    return true;
  }

  function downRightCheck(player: Player, row: number, col: number) {
    for (let r = row + 1, c = col + 1; r < row + 4 && c < col + 4; r++, c++) {
      if (r >= rows || c >= cols) {
        return false;
      }
      if (grid[r][c] !== player) {
        return false;
      }
    }
    return true;
  }

  function downLeftCheck(player: Player, row: number, col: number) {
    for (let r = row + 1, c = col - 1; r < row + 4 && c >= col - 4; r++, c--) {
      if (r >= rows || c < 0) {
        return false;
      }
      if (grid[r][c] !== player) {
        return false;
      }
    }
    return true;
  }

  return { addDisc, getDiscs, playerOne, playerTwo, isGameWon };
}
