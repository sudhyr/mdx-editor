import React from 'react'
import styles from './Textarea.css';

export default function Textarea(props) {
  return (
    <textarea
      className={styles.textareaRoot}
      {...props}/>
  )
}
