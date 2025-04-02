import ovalYellow from "../../assets/oval-yellow.svg";
import ovalRed from "../../assets/oval-red.svg";

export function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <button className="rounded-full bg-dark-purple py-2 px-5 uppercase font-bold">
        Menu
      </button>
      <div className="grid grid-cols-2 gap-1">
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
