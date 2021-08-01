import React from "react";
import style from "./Button.css";

function Button(props) {
  return (
    <button {...props} className={style.buttonRoot}>
      <div className={style.buttonBg}/>
      <div className={style.buttonContent}>
        <span className={style.text}>{props.children}</span>
      </div>
    </button>
  );
}

export default Button;
