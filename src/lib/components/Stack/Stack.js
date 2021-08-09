import clsx from "clsx";
import React from "react";
import styles from "./Stack.css"

export default function Stack(props) {
  return (
    <div className={styles.root}>
      {React.Children.map(props.children, (node) => {
        return <div className={clsx([
          styles.stackChild,
        ])}>{node}</div>;
      })}
    </div>
  );
}
