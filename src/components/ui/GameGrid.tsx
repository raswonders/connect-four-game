import { useEffect } from "react";
import { useGrid } from "../useGrid";

export function GameGrid() {
  const { addDisc, getDiscs, playerOne } = useGrid();
  useEffect(() => {
    addDisc(0, playerOne);
  }, []);

  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-4">
      {getDiscs().map((disc) => (
        <div
          className={`h-10 border border-neutral-300 ${
            disc ? (disc === playerOne ? "bg-red-400" : "bg-yellow-400") : ""
          }`}
        ></div>
      ))}
    </div>
  );
}
