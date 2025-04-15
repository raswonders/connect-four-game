import { Player } from "./PlayerCard";
import { Card } from "./Card";
import { GameStatus } from "./Game";

interface Props {
  gameStatus: GameStatus;
  players: Player[];
  seconds: number;
  className?: string;
}

type CardVariant = "red" | "yellow" | "neutral";

export function TurnDetailsCard({
  gameStatus,
  players,
  seconds,
  className,
}: Props) {
  let currentPlayer = players.filter((p) => p.isActive)[0];
  let cardVariant: CardVariant = "neutral";
  if (gameStatus.status !== "gameOver") {
    switch (currentPlayer.id) {
      case 0:
        cardVariant = "yellow";
        break;
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
        <h1 className="uppercase font-bold text-xl">
          Player's {currentPlayer.id} turn
        </h1>
        <h2 className="text-[56px] font-semibold">{seconds}s</h2>
      </div>
    </Card>
  );
}
