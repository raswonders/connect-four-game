import { Player } from "./PlayerCard";

interface Props {
  player: Player;
  className: string;
}

export function TurnDetails({ player, className }: Props) {
  return (
    <div className={`flex justify-center border-2 rounded-lg text-black ${className}`}>
      <h1>{`${player}'s turn`}</h1>
    </div>
  );
}
