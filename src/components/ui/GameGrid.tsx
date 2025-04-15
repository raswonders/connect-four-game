import { useGrid } from "../useGrid";
import { Player } from "./PlayerCard";
import GridFrontUrl from "../../assets/grid-front-layer.svg";
import GridRearUrl from "../../assets/grid-rear-layer.svg";
import { GameStatus } from "./Game";

const COLS = 7;
const ROWS = 6;

interface Props {
  gameStatus: GameStatus;
  player: Player;
  className: string;
  onTurnChange: () => void;
}

export function GameGrid({
  gameStatus,
  className,
  player,
  onTurnChange,
}: Props) {
  const { addDisc, getDiscs, isGameWon } = useGrid(ROWS, COLS);

  return (
    <div className={`relative text-black ${className}`}>
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
              if (gameStatus.status === "running") {
                addDisc(col, player);
                onTurnChange();
              }
            }}
          ></div>
        ))}
      </div>
      <img className="" src={GridRearUrl} alt="" />
    </div>
  );
}
