import React from 'react'
import styles from './Inline.css'
import clsx from "clsx";

export default function Inline({space, ...props}) {

  const childContainerClass = clsx([
    styles.inlineContainer,
    styles.spaceVariant_container[space]
  ])

  const childClasses = clsx([
    styles.inlineChild,
    styles.spaceVariant[space]
  ])

  return (
    <div className={styles.inlineRoot}>
      <div className={childContainerClass}>
        {React.Children.map(props.children, (node) => {
          return <div className={childClasses}>{node}</div>;
        })}
      </div>
    </div>
  )
}
