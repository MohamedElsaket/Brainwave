import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ children, className, href, onClick, white, px }) => {
  const classes = `button relative cursor-pointer inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${className || ""} ${white ? "text-n-8" : "text-n-1"}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <div className={classes} onClick={onClick}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </div>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
