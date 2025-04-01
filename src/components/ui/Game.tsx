import { GameGrid } from "./GameGrid";
import { Navbar } from "./Navbar";
import { PlayerCard } from "./PlayerCard";
import { TurnDetails } from "./TurnDetails";

export function Game() {
  return (
    <div>
      <Navbar />
      <div>
        <PlayerCard player={1} />
        <GameGrid />
        <PlayerCard player={2} />
      </div>
      <TurnDetails player={0} />
    </div>
  );
}
