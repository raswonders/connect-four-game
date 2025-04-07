import ovalYellow from "../../assets/oval-yellow.svg";
import ovalRed from "../../assets/oval-red.svg";

interface Props {
  className: string;
}

export function Navbar({ className }: Props) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <button className="rounded-full bg-dark-purple py-2 px-5 uppercase font-bold">
        Menu
      </button>a
      <div className="w-10 grid grid-cols-2 gap-0.5">
        <img src={ovalRed} alt="" />
        <img src={ovalYellow} alt="" />
        <img src={ovalYellow} alt="" />
        <img src={ovalRed} alt="" />
      </div>
      <button className="rounded-full bg-dark-purple py-2 px-5 uppercase font-bold">
        Restart
      </button>
    </div>
  );
}
