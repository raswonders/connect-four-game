import { useEffect, useState } from "react";
import { useGrid, Player } from "../useGrid";
import { useTimer } from "../useTimer";

const COLS = 7;
const ROWS = 6;

export function GameGrid() {
  const { addDisc, getDiscs, playerOne, playerTwo, isGameWon } = useGrid(
    ROWS,
    COLS
  );
  const [player, setPlayer] = useState<Player>(playerTwo);

  useEffect(() => {
    if (isGameWon(playerOne)) {
      console.log("Won!");
    }
  });

  const timer = useTimer(() => {
    setPlayer((prevPlayer) =>
      prevPlayer === playerOne ? playerTwo : playerOne
    );
  });

  return (
    <>
      <div className="grid grid-cols-7 grid-rows-6 gap-4">
        {getDiscs().map((disc, index) => (
          <div
            onClick={() => {
              addDisc(index % COLS, player);
              setPlayer((prevPlayer) =>
                prevPlayer === playerOne ? playerTwo : playerOne
              );
              timer.restart();
            }}
            className={`h-10 border border-neutral-300 ${
              disc ? (disc === playerOne ? "bg-red-400" : "bg-yellow-400") : ""
            } column-${index % COLS}`}
          ></div>
        ))}
      </div>
      <select
        value={player}
        onChange={(event) => setPlayer(parseInt(event.target.value) as Player)}
      >
        <option value="1">Player One</option>
        <option value="2">Player Two</option>
      </select>
    </>
  );
}
