import PlayerOneIcon from "../../assets/player-one.svg";
import PlayerTwoIcon from "../../assets/player-two.svg";
import { Card } from "./Card";
export type Player = -1 | 0 | 1 | 2;

type Props = {
  player: Player;
  score: number;
  className?: string;
};

export function PlayerCard({ player, score, className }: Props) {
  const icon = player === 1 ? PlayerOneIcon : PlayerTwoIcon;
  const name = player === 1 ? "Player 1" : "Player 2";

  return (
    <Card className={className}>
      <div className="flex flex-col items-center relative bg-white rounded-xl">
        <img src={icon} alt="" className="absolute -translate-y-1/2" />
        <div className="pt-12 pb-4 flex flex-col justify-center items-center">
          <h1 className="uppercase font-bold text-xl m-0">{name}</h1>
          <h2 className="text-[56px] font-semibold m-0">{score}</h2>
        </div>
      </div>
    </Card>
  );
}
