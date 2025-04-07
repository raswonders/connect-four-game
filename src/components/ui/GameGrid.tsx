import { useState } from "react";
import { useGrid } from "../useGrid";
import { useTimer } from "../useTimer";
import { Player } from "./PlayerCard";
import GridFrontUrl from "../../assets/grid-front-layer.svg";
import GridRearUrl from "../../assets/grid-rear-layer.svg";

const COLS = 7;
const ROWS = 6;

export function GameGrid() {
  const { addDisc, getDiscs, playerOne, playerTwo, isGameWon } = useGrid(
    ROWS,
    COLS
  );
  const [player, setPlayer] = useState<Player>(playerTwo);
  const timer = useTimer(() => {
    setPlayer((prevPlayer) =>
      prevPlayer === playerOne ? playerTwo : playerOne
    );
  });

  return (
    <div className="relative text-black">
      <img className="absolute" src={GridFrontUrl} alt="" />
      {/* Grid-based overlay for disc placement */}
      <div className="absolute w-full h-full grid grid-cols-7 grid-rows-6 gap-[3.7975%] p-[3.1646%] pb-[11.0759%]">
        {getDiscs().map(() => (
          <div></div>
        ))}
      </div>
      {/* Column-based overlay for clicks */}
      <div className="absolute box-border w-full h-full flex px-[1.58%]">
        {new Array(COLS).fill(null).map((_, col) => (
          <div
            className="grow flex flex-col"
            data-col={col}
            onClick={() => {
              addDisc(col, player);
              setPlayer((prevPlayer) =>
                prevPlayer === playerOne ? playerTwo : playerOne
              );
              timer.restart();
            }}
          ></div>
        ))}
      </div>
      <img className="" src={GridRearUrl} alt="" />
    </div>
  );
}
