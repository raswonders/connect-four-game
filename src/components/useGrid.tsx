import { useCallback, useEffect, useState } from "react";
import { PlayerId } from "./ui/PlayerCard";
import { Winner } from "./ui/Game";

type SolutionId<T extends PlayerId> = T extends T ? `${T}*` : never;
type GridItem = PlayerId | SolutionId<PlayerId> | null;
type SolutionArr = [number, number][];

export function useGrid(
  rows: number,
  cols: number,
  handleGameOver: (arg: Winner) => void
) {
  const [grid, setGrid] = useState<GridItem[][]>(
    Array.from({ length: rows }, () => {
      return Array(cols).fill(null);
    })
  );

  useEffect(() => {
    if (isGridFull()) {
      handleGameOver("draw");
    }
  }, [grid]);

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

  function getSolution(row: number, col: number, playerId: PlayerId) {
    return [
      ...getHorizontalSol(row, col, playerId),
      ...getVerticalSol(row, col, playerId),
      ...getDiagonalSol(row, col, playerId),
    ];
  }

  function getHorizontalSol(row: number, col: number, playerId: PlayerId) {
    const result = [[row, col]];

    for (let left = col - 1; left >= 0; left--) {
      if (grid[row][left] !== playerId) break;
      result.push([row, left]);
    }
    for (let right = col + 1; right < cols; right++) {
      if (grid[row][right] !== playerId) break;
      result.push([row, right]);
    }

    return result.length >= 4 ? result : [];
  }

  function getVerticalSol(row: number, col: number, playerId: PlayerId) {
    const result = [[row, col]];

    // skip up direction as its useless
    for (let down = row + 1; down < rows; down++) {
      if (grid[down][col] !== playerId) break;
      result.push([down, col]);
    }

    return result.length >= 4 ? result : [];
  }

  function getEmptyRow(col: number) {
    for (let row = rows - 1; row >= 0; row--) {
      if (grid[row][col] === null) {
        return row;
      }
    }
    return null;
  }

  function getDiagonalSol(row: number, col: number, playerId: PlayerId) {
    let result: SolutionArr = [[row, col]];
    const resultNW: SolutionArr = [];
    const resultNE: SolutionArr = [];

    // NW diagonal
    for (let up = row - 1, left = col - 1; up >= 0 && left >= 0; up--, left--) {
      if (grid[up][left] !== playerId) break;
      resultNW.push([up, left]);
    }
    for (
      let down = row + 1, right = col + 1;
      down < rows && right < cols;
      down++, right++
    ) {
      if (grid[down][right] !== playerId) break;
      resultNW.push([down, right]);
    }
    if (resultNW.length >= 3) result = result.concat(resultNW);

    // NE diagonal
    for (
      let up = row - 1, right = col + 1;
      up >= 0 && right < cols;
      up--, right++
    ) {
      if (grid[up][right] !== playerId) break;
      resultNE.push([up, right]);
    }
    for (
      let down = row + 1, left = col - 1;
      down < rows && left >= 0;
      down++, left--
    ) {
      if (grid[down][left] !== playerId) break;
      resultNE.push([down, left]);
    }
    if (resultNE.length >= 3) result = result.concat(resultNE);

    return result.length >= 4 ? result : [];
  }

  function addDisc(col: number, playerId: PlayerId) {
    const row = getEmptyRow(col);
    if (row === null) return;
    const solution = getSolution(row, col, playerId);

    setGrid((prevGrid) => {
      const nextGrid = prevGrid.map((row) => [...row]);
      if (solution.length > 0) {
        solution.forEach(([row, col]) => {
          nextGrid[row][col] = `${playerId}*`;
        });
      } else {
        nextGrid[row][col] = playerId;
      }
      return nextGrid;
    });

    if (solution.length > 0) {
      handleGameOver(playerId);
    }
  }

  function getDiscs() {
    return grid.flat();
  }

  const clearGrid = useCallback(() => {
    setGrid(
      Array.from({ length: rows }, () => {
        return Array(cols).fill(null);
      })
    );
  }, [rows, cols]);

  function columnHasSpace(col: number) {
    return grid[0][col] === null;
  }

  return {
    addDisc,
    getDiscs,
    clearGrid,
    columnHasSpace,
  };
}
