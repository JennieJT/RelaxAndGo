import React, { useContext } from "react";
import { TypeColorsContext } from "../../context/ColorContext";

function StatusBar({ types }) {
  const COLORS = useContext(TypeColorsContext);
  return (
    <div className="flex flex-row flex-wrap gap-2 items-center h-fit p-1">
      {types?.map((item, index) => (
        <div
          key={index}
          className={`flex items-center rounded-md text-xs px-1 ${
            COLORS ? COLORS[item.title as keyof typeof COLORS] : ""
          }`}
        >
          {item.title} {item.achieved} / {item.total}
        </div>
      ))}
    </div>
  );
}

export default StatusBar;
