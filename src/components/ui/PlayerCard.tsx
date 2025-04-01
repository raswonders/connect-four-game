export type Player = -1 | 0 | 1 | 2;

type Props = {
  player: Player;
};

export function PlayerCard({ player }: Props) {
  return <h1>{`Player ${player}`}</h1>;
}
