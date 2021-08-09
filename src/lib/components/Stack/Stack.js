import clsx from "clsx";
import React from "react";
import styles from "./Stack.css"

export default function Stack({space, align, ...props}) {
  return (
    <div className={styles.root}>
      <div className={clsx([
        styles.childContainer,
        styles.spaceVariant_container[space]
      ])}>
        {React.Children.map(props.children, (node) => {
          return <div className={clsx([
            styles.stackChild,
            styles.spaceVariant[space],
            styles._align[align]
          ])}>{node}</div>;
        })}
      </div>
    </div>
  );
}
