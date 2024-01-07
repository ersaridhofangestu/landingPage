import React from "react";

const Card = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Card;

const Big = ({ children, title, information, p }) => {
  return (
    <div>
      <div className={`border-2 bg-white border-slate-100 shadow-2xl shadow-slate-300 p-5 w-full xl:w-64 rounded-lg ${p}`}>
        {children}
        <p className="font-bold">{title}</p>
        <small>{information}</small>
      </div>
    </div>
  );
};

Card.Big = Big;

const Small = ({ children, title }) => {
  return (
    <div className="border-2 bg-white border-slate-100 shadow-2xl shadow-slate-200 p-2 w-full rounded-lg flex items-center gap-2">
      {children}
      <div>
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
};

Card.Small = Small;
