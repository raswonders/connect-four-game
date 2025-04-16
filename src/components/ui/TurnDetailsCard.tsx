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
      {gameStatus.status === "gameOver" ? (
        <div className="m-4 text-center">
          <h1 className="uppercase font-bold text-xl">
            {gameStatus.winner === "draw"
              ? "Game Over"
              : `Player ${gameStatus.winner}`}
          </h1>
          <h2 className="uppercase text-[56px] font-semibold">
            {gameStatus.winner === "draw" ? "draw" : "wins"}
          </h2>
          <button
            onClick={() => {
              // TODO: implement game restart
            }}
            className="text-white min-w-32 rounded-full bg-figma-dark-purple p-2 uppercase font-bold"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="m-4 text-center">
          <h1 className="uppercase font-bold text-xl">
            Player's {currentPlayer.id} turn
          </h1>
          <h2 className="text-[56px] font-semibold">{seconds}s</h2>
        </div>
      )}
    </Card>
  );
}
