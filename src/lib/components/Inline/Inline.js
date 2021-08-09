import React from 'react'
import styles from './Inline.css'
import clsx from "clsx";

export default function Inline({space, ...props}) {

  return (
    <div className={styles.inlineRoot}>
      <div
        className={clsx([
          styles.inlineContainer, styles.spaceVariant_container[space]
        ])}>
        {React.Children.map(props.children, (node) => {
          return <div
            className={clsx([
              styles.inlineChild, styles.spaceVariant[space]
            ])}>{node}</div>;
        })}
      </div>
    </div>
  )
}
