import React from "react";

function Button({ children, className }) {
  return (
    <div
      className={`${className} py-1 px-5 rounded-full text-sm font-semibold`}
    >
      {children}
    </div>
  );
}

export default Button;

export const Primary = ({ children }) => {
  return (
    <Button className="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 ">
      {children}
    </Button>
  );
};
Button.Primary = Primary;

export const Light = ({ children }) => {
  return (
    <Button className="text-black bg-slate-50 hover:bg-slate-100 active:bg-slate-100 ">
      {children}
    </Button>
  );
};
Button.Light = Light;

export const Yellow = ({ children, className }) => {
  return (
    <Button
      className={`text-black bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 ${className}`}
    >
      {children}
    </Button>
  );
};
Button.Yellow = Yellow;

export const IconPrimary = ({ children, className }) => {
  return (
    <Button
      className={`text-white bg-blue-200 hover:bg-blue-300 active:bg-blue-400 px-[11px] 
    py-[10px] items-center flex justify-center ${className}`}
    >
      {children}
    </Button>
  );
};
Button.IconPrimary = IconPrimary;
