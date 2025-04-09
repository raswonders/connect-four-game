interface Props {
  className?: string;
  children: React.ReactNode;
  variant?: "red" | "yellow" | "neutral";
}
const redVariantCss = "bg-figma-red text-figma-white";
const yellowVariantCss = "bg-figma-yellow";
const neutralVariantCss = "bg-figma-white";

export function Card({ variant, className, children }: Props) {
  return (
    <div
      className={`relative w-full rounded-2xl flex-col items-center bg-black border-3 border-b-[16px] text-black ${
        className ? className : ""
      }`}
    >
      <div
        className={`flex flex-col items-center relative ${
          variant === "red"
            ? redVariantCss
            : variant === "yellow"
            ? yellowVariantCss
            : neutralVariantCss
        } rounded-xl`}
      >
        {children}
      </div>
    </div>
  );
}
