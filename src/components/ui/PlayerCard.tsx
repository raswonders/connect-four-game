import RedSmiley from "../../assets/red-smiley.svg";
import YellowSmiley from "../../assets/yellow-smiley.svg";
import { Card } from "./Card";

export type PlayerId = 0 | 1 | 2;
export type Player = {
  id: PlayerId;
  score: number;
  isActive: boolean;
};

type Props = {
  player: Player;
  score: number;
  variant: "left" | "right";
  className?: string;
};

export function PlayerCard({ player, score, variant, className }: Props) {
  let name = "Unknown";
  switch (player.id) {
    case 0:
      name = "CPU";
      break;
    case 1:
      name = "Player 1";
      break;
    case 2:
      name = "Player 2";
      break;
  }

  let iconCss = "";
  let iconUrl;
  switch (variant) {
    case "left":
      iconCss = "left-0 -translate-x-1/2";
      iconUrl = RedSmiley;
      break;
    case "right":
      iconCss = "right-0 lg:right-auto translate-x-1/2 lg:-translate-x-1/2";
      iconUrl = YellowSmiley;
      break;
  }

  return (
    <Card className={`lg:max-w-35 ${className}`}>
      <div className="w-full flex bg-white rounded-xl my-2">
        <img
          src={iconUrl}
          alt=""
          className={`absolute top-1/2 lg:top-0 -translate-y-1/2 lg:left-1/2 ${iconCss}`}
        />
        <div className="w-full flex flex-col sm:flex-row lg:flex-col justify-center sm:gap-5 lg:gap-0 lg:mt-10 lg:mb-3 items-center">
          <h1 className="uppercase text-base sm:text-xl font-bold m-0">
            {name}
          </h1>
          <h2 className="text-3xl sm:text-[56px] font-bold m-0">{score}</h2>
        </div>
      </div>
    </Card>
  );
}
