import React from 'react'
import s from './common.css';

export default function PageEditor() {
  return (
    <div className={s.appBody}>
      <div className={s.explorerView}>
        <pre>MDX content goes here</pre>
        <h1></h1>
      </div>
    </div>
  )
}
