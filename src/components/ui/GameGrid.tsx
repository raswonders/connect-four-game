import { useGrid } from "../useGrid";
import { Player } from "./PlayerCard";
import GridFrontUrl from "../../assets/grid-front-layer.svg";
import GridRearUrl from "../../assets/grid-rear-layer.svg";
import { GameStatus } from "./Game";
import RedOval from "../../assets/oval-red-big.svg";
import YellowOval from "../../assets/oval-yellow-big.svg";

const COLS = 7;
const ROWS = 6;

interface Props {
  gameStatus: GameStatus;
  players: Player[];
  className: string;
  onTurnChange: () => void;
  handleGameOver: (result: Player | "draw") => void;
}

export function GameGrid({
  gameStatus,
  className,
  players,
  onTurnChange,
}: Props) {
  const { addDisc, getDiscs, isGameWon } = useGrid(ROWS, COLS);
  let currentPlayer = players.filter((p) => p.isActive)[0];

  return (
    <div className={`z-0 relative text-black ${className}`}>
      {/* Grid-based overlay for disc placement */}
      <div className="absolute w-full h-full grid grid-cols-7 grid-rows-6 gap-[3.7975%] p-[3.1646%] pb-[11.0759%]">
        {getDiscs().map((disc) => (
          <div>
            {disc && <img src={disc === 1 ? RedOval : YellowOval} alt="" />}
          </div>
        ))}
      </div>
      <img className="absolute" src={GridFrontUrl} alt="" />
      {/* Column-based overlay for clicks */}
      <div className="absolute box-border w-full h-full flex px-[1.58%]">
        {new Array(COLS).fill(null).map((_, col) => (
          <div
            className="grow flex flex-col"
            data-col={col}
            onClick={() => {
              if (gameStatus.status === "running") {
                addDisc(col, currentPlayer.id);
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
