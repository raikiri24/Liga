import React from "react";

interface TextOverTextParams {
  text: string;
  className?: string;
}

const TextOverText = ({ text, className }: TextOverTextParams) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute text-3xl z-10 top-12 left-28 text-center">
        {text}
      </span>
      <div className="text-9xl  bg-slate-500  opacity-10 bg-opacity-10 flex">
        <p className="text-center"> {text}</p>
      </div>
    </div>
  );
};

export default TextOverText;
