interface Props {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: Props) {
  return (
    <div
      className={`w-full rounded-2xl flex-col items-center bg-black border-3 border-b-[16px] text-black ${
        className ? className : ""
      }`}
    >
      <div className="flex flex-col items-center relative bg-white rounded-xl">
        {children}
        {/* <div className="pt-12 pb-4 flex flex-col justify-center items-center">
        </div> */}
      </div>
    </div>
  );
}
