import { useState } from "react";
import { GameGrid } from "./GameGrid";
import { Navbar } from "./Navbar";
import { Player, PlayerCard } from "./PlayerCard";
import { TurnDetailsCard } from "./TurnDetailsCard";
import { useTimer } from "../useTimer";
type GameStatus = {
  status: "running" | "paused" | "gameOver";
  result?: Player | "draw";
};
export function Game() {
  // TODO: gameState running | paused | gameOver
  // TODO: gameResult

  const [gameStatus, setGameStatus] = useState({ status: "running" });
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, score: 0, isActive: true },
    { id: 2, score: 0, isActive: false },
  ]);

  const timer = useTimer(() => {
    changeActivePlayer();
  });

  function changeActivePlayer() {
    setPlayers((prev) => {
      const result = prev.map((player) => ({
        ...player,
        isActive: !player.isActive,
      }));
      return result;
    });
  }

  function onTurnChange() {
    changeActivePlayer();
    timer.restart();
  }

  function handlePause() {
    switch (gameStatus.status) {
      case "running":
        setGameStatus({ status: "paused" });
        timer.pause();
        console.log("game paused!")
        break;
      case "paused":
        setGameStatus({ status: "running" });
        timer.resume();
        console.log("game resumed!")
        break;
    }
  }

  return (
    <div className="px-5 mt-12 grid grid-cols-2 lg:grid-cols-4 justify-center gap-x-4 gap-y-12">
      <Navbar handlePause={handlePause} className="col-span-2 lg:col-span-4" />
      <PlayerCard
        variant="left"
        player={players[0]}
        score={15}
        className="self-center justify-self-start"
      />
      <PlayerCard
        variant="right"
        player={players[1]}
        score={0}
        className="self-center lg:order-2 justify-self-end"
      />
      <GameGrid
        gameStatus={gameStatus}
        onTurnChange={onTurnChange}
        player={players.filter((p) => p.isActive)[0]}
        className="col-span-2 justify-self-center lg:order-1"
      />
      <TurnDetailsCard
        gameStatus={gameStatus}
        player={players.filter((p) => p.isActive)[0]}
        seconds={timer.secondsLeft}
        className="-mt-18 sm:-mt-24 lg:order-3 col-span-2 lg:col-span-4 justify-self-center"
      />
    </div>
  );
}
