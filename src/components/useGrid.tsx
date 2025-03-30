import { useState } from "react";

const COLS = 7;
const ROWS = 6;
const playerAI = -1 as const;
const playerOne = 1 as const;
const playerTwo = 2 as const;
const playerEmpty = 0 as const;

type Player = -1 | 0 | 1 | 2;

export function useGrid() {
  const [grid, setGrid] = useState<Player[][]>(
    Array.from({ length: ROWS }, () => {
      return Array(COLS).fill(0);
    })
  );

  function addDisc(col: number, player: Player) {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      for (let row = ROWS - 1; row >= 0; row--) {
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

  return { addDisc, getDiscs, playerOne };
}

export function checkWin() {
  // TODO
  // Level 0
  // for each cell (do 4 dir checks)
  //  right check
  //  down check
  //  down-right check
  //  down-left check
  // Level 1 Exclude double checking cells which have no chance
}
