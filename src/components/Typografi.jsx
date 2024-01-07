import React from "react";
import Button from "./Button";

const Typografi = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Typografi;

const Header = ({ small, title }) => {
  return (
    <Typografi className="text-center xl:w-[35rem] mx-auto">
      <small className="text-red-700 font-semibold text-sm uppercase">
        {small}
      </small>
      <h3 className="text-4xl font-bold capitalize ">{title}</h3>
    </Typografi>
  );
};

Typografi.Header = Header;

const Paragraf = ({ small, title, btn, wP }) => {
  return (
    <div>
      <small className="text-red-700 font-semibold text-sm uppercase">
        {small}
      </small>
      <h4 className="text-3xl font-bold md:w-[440px]">{title}</h4>
      <p className={`text-sm my-4 ${wP}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        dignissimos! At assumenda molestiae dicta ut commodi molestias libero
        modi laboriosam, sequi asperiores est provident ab quidem saepe
        aspernatur voluptatem nulla perspiciatis aut soluta. Fugit nihil animi
        quis deserunt fuga dicta, ad accusamus quos at assumenda ipsam magnam et
        incidunt tempora.
      </p>
      <Button.Yellow className="py-2">{btn}</Button.Yellow>
    </div>
  );
};

Typografi.Paragraf = Paragraf;
