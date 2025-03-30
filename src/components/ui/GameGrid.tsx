import { useGrid } from "../useGrid";
const COLS = 7;
const ROWS = 6;

export function GameGrid() {
  const { addDisc, getDiscs, playerOne } = useGrid(ROWS, COLS);

  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-4">
      {getDiscs().map((disc, index) => (
        <div
          onClick={() => {
            addDisc(index % COLS, playerOne);
          }}
          className={`h-10 border border-neutral-300 ${
            disc ? (disc === playerOne ? "bg-red-400" : "bg-yellow-400") : ""
          } column-${index % COLS}`}
        ></div>
      ))}
    </div>
  );
}
