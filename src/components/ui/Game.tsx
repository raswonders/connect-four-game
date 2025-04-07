import { GameGrid } from "./GameGrid";
import { Navbar } from "./Navbar";
import { PlayerCard } from "./PlayerCard";
import { TurnDetails } from "./TurnDetails";

export function Game() {
  return (
    // todo make grid cols4
    <div className="px-5 mt-12 grid grid-cols-2 lg:grid-cols-4 justify-center gap-x-4 gap-y-12">
      <Navbar className="col-span-2 lg:col-span-4" />
      <PlayerCard
        player={1}
        score={12}
        className="self-center justify-self-start"
      />
      <PlayerCard
        player={2}
        score={0}
        className="self-center lg:order-2 justify-self-end"
      />
      <GameGrid className="col-span-2 justify-self-center lg:order-1" />
      <TurnDetails
        player={0}
        className="lg:order-3 col-span-2 lg:col-span-4"
      />
    </div>
  );
}
