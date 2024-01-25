import React from "react";

const Button = ({ bg, color, data, hoverBg, hoverColor }) => {
  console.log(bg, color, data, hoverBg, hoverColor);
  return (
    <div>
      <button
        className={`w-40 h-14 rounded-lg font-Jost text-base uppercase font-medium ${bg} ${color} hover:${hoverBg} hover:${hoverColor} cursor-pointer hover:scale-125 hover:ease-in`}>
        {data}
      </button>
    </div>
  );
};

export default Button;
