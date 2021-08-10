import React from 'react';
import SplitPane from "react-split-pane";
import {Textarea} from "../../lib/components";
import s from './EditorView.css'

const EditorView = (
  {
    onChange,
    value
  }) => {
  return (
    <div className={s.splitPaneContainer}>
      <SplitPane className={s.splitPaneRoot} split="vertical"
                 minSize={'50%'}>
        <Textarea
          style={{ height: '100%' }}
          onChange={e => onChange(e.target.value)}
          value={value}/>
        <div>
          Preview
        </div>
      </SplitPane>
    </div>
  );
};

export default EditorView;
