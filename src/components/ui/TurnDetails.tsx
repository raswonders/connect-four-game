import { Player } from "./PlayerCard";

type Props = {
  player: Player;
};

export function TurnDetails({ player }: Props) {
  return <h1>{`${player}'s turn`}</h1>;
}
