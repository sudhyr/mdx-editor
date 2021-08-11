import React from 'react';
import SplitPane from "react-split-pane";
import MDX from '@mdx-js/runtime'
import 'style-loader!css-loader!!codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import s from './EditorView.css'
// import {Textarea} from "../../lib/components";

const EditorView = (
  {
    onChange,
    value
  }) => {
  return (
    <div className={s.splitPaneContainer}>
      <SplitPane className={s.splitPaneRoot} split="vertical"
                 minSize={'50%'}>
        <div className={s.splitPaneEditorPane}>
          <CodeMirror
            value={value || ""}
            options={{
              mode: 'markdown',
              theme: 'material',
            }}
            onChange={(editor, data, value) => {
              onChange(value)
            }}
            className={s.codemirrorEditorRoot}
          />
        </div>
        <div className={s.splitPaneEditorPane}>
          <MDX>{value}</MDX>
        </div>
      </SplitPane>
    </div>
  );
};

export default EditorView;
