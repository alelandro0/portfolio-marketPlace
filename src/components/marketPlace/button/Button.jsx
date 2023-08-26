import React from "react";

const Button = ({ num, click }) => {
  const buttonClassName = num > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white";

  return (
    <button className={`px-4 py-2 rounded-full border border-black ${buttonClassName}`} onClick={() => click(true)}>
      <span>{num}</span> {num === 1}
    </button>
  );
};

export default Button;
