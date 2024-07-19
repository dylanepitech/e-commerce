import { X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  colors?: "red" | "black" | "green" | undefined;
};

const color = {
  red: "bg-red-500",
  black: "bg-black text-white",
  green: "bg-emerald-500",
};

export default function Alert({ children, colors = undefined }: Props) {
  const [enter, setEnter] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);

  useEffect(() => {
    setEnter(true);
  }, [enter]);

  function closePopup() {
    setClose(true);
  }

  if (close) {
    return null;
  }

  return (
    <div
      className={`w-auto max-w-60 min-w-40 bg-white shadow-lg shadow-black px-6 py-2 rounded-md absolute right-5 flex flex-col bottom-0 ${
        colors === undefined ? "" : color[colors]
      }`}
      style={{
        transform: enter ? "translateY(-90vh)" : "translateY(0)",
        transition: "transform 2s",
      }}
    >
      <X
        onClick={closePopup}
        className="absolute right-1 cursor-pointer"
        size={20}
      />
      <p className="line-clamp-2 pt-2 text-sm font-semibold">{children}</p>
    </div>
  );
}
