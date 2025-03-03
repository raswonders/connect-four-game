import * as game from "../game";

export function GameBoard() {
  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-4">
      {game.getDiscs().map((disc) => (
        <div
          className={`h-10 border border-neutral-300 ${
            disc
              ? disc === game.playerOne
                ? "bg-red-400"
                : "bg-yellow-400"
              : ""
          }`}
        ></div>
      ))}
    </div>
  );
}
