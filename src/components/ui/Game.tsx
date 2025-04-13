import { useState } from "react";
import { GameGrid } from "./GameGrid";
import { Navbar } from "./Navbar";
import { Player, PlayerCard } from "./PlayerCard";
import { TurnDetailsCard } from "./TurnDetailsCard";
type GameStatus = {
  status: "running" | "paused" | "gameOver";
  result?: Player | "draw";
};
export function Game() {
  // TODO: score player1 & player2
  // TODO: gameState running | paused | gameOver 
  // TODO: gameResult
  // TODO: players [Player, Player]
  // TODO: turn 0 | 1 
  // TODO: timerRef for turn timer

  const [gameStatus, setGameStatus] = useState({ status: "running" });

  return (
    <div className="px-5 mt-12 grid grid-cols-2 lg:grid-cols-4 justify-center gap-x-4 gap-y-12">
      <Navbar className="col-span-2 lg:col-span-4" />
      <PlayerCard
        variant="left"
        player={1}
        score={15}
        className="self-center justify-self-start"
      />
      <PlayerCard
        variant="right"
        player={2}
        score={0}
        className="self-center lg:order-2 justify-self-end"
      />
      <GameGrid
        gameStatus={gameStatus}
        className="col-span-2 justify-self-center lg:order-1"
      />
      <TurnDetailsCard
        gameStatus={gameStatus}
        player={1}
        seconds={14}
        className="-mt-18 sm:-mt-24 lg:order-3 col-span-2 lg:col-span-4 justify-self-center"
      />
    </div>
  );
}
