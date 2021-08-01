import React from "react";
import styles from "./Stack.css"

export default function Stack(props) {
  return (
    <div className={styles.root}>
      {React.Children.map(props.children, (node) => {
        return <div className={styles.stackChild}>{node}</div>;
      })}
    </div>
  );
}
