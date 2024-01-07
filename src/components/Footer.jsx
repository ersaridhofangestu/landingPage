import React from "react";

const Footer = ({ children, className }) => {
  return (
    <div className={`w-[100%] py-1 text-center font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default Footer;

const Yellow = ({ children, className }) => {
  return (
    <Footer className={`bg-yellow-500 text-black text-sm ${className}`}>
      {children}
    </Footer>
  );
};

Footer.Yellow = Yellow;

const Blue = ({ children, className }) => {
  return (
    <Footer className={`bg-blue-700 text-black text-sm ${className}`}>
      {children}
    </Footer>
  );
};

Footer.Blue = Blue;
