import { Player } from "./PlayerCard";
import HouseShapeYellowUrl from "../../assets/house-shape-yellow.svg";
import HouseShapeRedUrl from "../../assets/house-shape-red.svg";

interface Props {
  player: Player;
  seconds: number;
  className?: string;
}

export function TurnDetails({ player, seconds, className }: Props) {
  const bgUrl = player === 1 ? HouseShapeRedUrl : HouseShapeYellowUrl;
  return (
    <div
      className={`relative flex justify-center ${className ? className : ""}`}
    >
      {/* <div className="relative w-fit"> */}
      <img className="" src={bgUrl} alt="" />
      <div className="text-black absolute inset-0 flex flex-col justify-end items-center">
        <h1 className="uppercase font-bold text-xl m-0">
          Player's {player} turn
        </h1>
        <h2 className="text-[56px] font-semibold m-0 mb-2">{seconds}s</h2>
        {/* </div> */}
      </div>
    </div>
  );
}
