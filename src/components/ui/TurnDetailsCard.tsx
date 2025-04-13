import { Player } from "./PlayerCard";
import { Card } from "./Card";

interface Props {
  gameStatus: object;
  player: Player;
  winner?: Player;
  seconds: number;
  className?: string;
}

type CardVariant = "red" | "yellow" | "neutral";

export function TurnDetailsCard({ gameStatus, player, winner, seconds, className }: Props) {
  let cardVariant: CardVariant = "neutral";
  if (!winner) {
    switch (player) {
      case 1:
        cardVariant = "red";
        break;
      case 2:
        cardVariant = "yellow";
        break;
    }
  }

  return (
    <Card variant={cardVariant} className={`max-w-56 ${className ?? ""}`}>
      <div className="m-4 text-center">
        <h1 className="uppercase font-bold text-xl">Player's {player} turn</h1>
        <h2 className="text-[56px] font-semibold">{seconds}s</h2>
      </div>
    </Card>
  );
}
