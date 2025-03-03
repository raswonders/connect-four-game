type PlayerAI = -1;
type PlayerEmpty = 0;
type PlayerOne = 1;
type PlayerTwo = 2;
type Player = PlayerAI | PlayerOne | PlayerTwo | PlayerEmpty;

export const playerAi: PlayerAI = -1;
export const playerOne: PlayerOne = 1;
export const playerTwo: PlayerTwo = 2;
export const playerEmpty: PlayerEmpty = 0;

const ROWS = 6;
const COLS = 7;
const grid: Player[][] = Array.from({ length: ROWS }, () => {
  return Array(COLS).fill(0);
});

export function addDisc(col: number, player: Player) {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (grid[row][col] === 0) {
      grid[row][col] = player;
      return true;
    }
  }
  return false;
}

export function getDiscs() {
  return grid.flat();
}
