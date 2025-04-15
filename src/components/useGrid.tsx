import { useEffect, useState } from "react";
import { PlayerId } from "./ui/PlayerCard";
import { GameResult } from "./ui/Game";

const playerCPU = 0 as const;
const playerOne = 1 as const;
const playerTwo = 2 as const;

export function useGrid(
  rows: number,
  cols: number,
  handleGameOver: (arg: GameResult) => void
) {
  const [grid, setGrid] = useState<(PlayerId | null)[][]>(
    Array.from({ length: rows }, () => {
      return Array(cols).fill(null);
    })
  );
  const [lastPlayerId, setLastPlayerId] = useState<PlayerId>();

  function isGridFull() {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === null) {
          return false;
        }
      }
    }
    return true;
  }

  function addDisc(col: number, playerId: PlayerId) {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      for (let row = rows - 1; row >= 0; row--) {
        if (newGrid[row][col] === null) {
          newGrid[row][col] = playerId;
          break;
        }
      }
      return newGrid;
    });
    setLastPlayerId(playerId);
  }

  function getDiscs() {
    return grid.flat();
  }

  function isGameWon(playerId: PlayerId): boolean {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === playerId) {
          return victoryCheck(playerId, row, col);
        }
      }
    }
    return false;
  }

  function victoryCheck(playerId: PlayerId, row: number, col: number): boolean {
    return (
      rightCheck(playerId, row, col) ||
      downCheck(playerId, row, col) ||
      downRightCheck(playerId, row, col) ||
      downLeftCheck(playerId, row, col)
    );
  }

  function rightCheck(playerId: PlayerId, row: number, col: number) {
    for (let c = col + 1; c < col + 4; c++) {
      if (c >= cols) {
        return false;
      }
      if (grid[row][c] !== playerId) {
        return false;
      }
    }
    return true;
  }

  function downCheck(playerId: PlayerId, row: number, col: number) {
    for (let r = row + 1; r < row + 4; r++) {
      if (r >= rows) {
        return false;
      }
      if (grid[r][col] !== playerId) {
        return false;
      }
    }
    return true;
  }

  function downRightCheck(playerId: PlayerId, row: number, col: number) {
    for (let r = row + 1, c = col + 1; r < row + 4 && c < col + 4; r++, c++) {
      if (r >= rows || c >= cols) {
        return false;
      }
      if (grid[r][c] !== playerId) {
        return false;
      }
    }
    return true;
  }

  function downLeftCheck(playerId: PlayerId, row: number, col: number) {
    for (let r = row + 1, c = col - 1; r < row + 4 && c >= col - 4; r++, c--) {
      if (r >= rows || c < 0) {
        return false;
      }
      if (grid[r][c] !== playerId) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (lastPlayerId && isGameWon(lastPlayerId)) {
      handleGameOver(lastPlayerId);
    } else if (isGridFull()) {
      handleGameOver("draw");
    }
  }, [lastPlayerId]);

  return { addDisc, getDiscs, playerOne, playerTwo, isGameWon };
}
