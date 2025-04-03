import PlayerOneIcon from "../../assets/player-one.svg";
import PlayerTwoIcon from "../../assets/player-two.svg";
export type Player = -1 | 0 | 1 | 2;

type Props = {
  player: Player;
  score: number;
};

export function PlayerCard({ player, score }: Props) {
  const icon = player === 1 ? PlayerOneIcon : PlayerTwoIcon;
  const name = player === 1 ? "Player 1" : "Player 2";

  return (
    <div className="rounded-2xl flex-col items-center bg-black border-3 border-b-[16px] text-black basis-36 max-w-36">
      <div className="flex flex-col items-center relative bg-white rounded-xl">
        <img src={icon} alt="" className="absolute -translate-y-1/2" />
        <div className="pt-12 pb-4 flex flex-col justify-center items-center">
          <h1 className="uppercase font-bold text-xl m-0">{name}</h1>
          <h2 className="text-[56px] font-semibold m-0">{score}</h2>
        </div>
      </div>
    </div>
  );
}
