import React from 'react'
import styles from './Inline.css'

export default function Inline(props) {
  return (
    <div className={styles.inlineRoot}>
      {React.Children.map(props.children, (node) => {
        return <div className={styles.inlineChild}>{node}</div>;
      })}
    </div>
  )
}
