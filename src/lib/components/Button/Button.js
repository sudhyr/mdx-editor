import React from "react";
import style from "./Button.css";
import clsx from "clsx";

function Button(
  {
    block: buttonBlock = false,
    ...props
  }) {

  const buttonStyles = clsx([
    style.buttonRoot,
    (buttonBlock && style.button_block)
  ])

  return (
    <button {...props} className={buttonStyles}>
      <div className={style.buttonBg}/>
      <div className={style.buttonContent}>
        <span className={style.text}>{props.children}</span>
      </div>
    </button>
  );
}

export default Button;
