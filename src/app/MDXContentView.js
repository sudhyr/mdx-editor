import React, { useState, useRef } from "react";
import SplitPane from 'react-split-pane';
import s from "./common.css";
import { Button, Stack, Inline, Textarea } from '../lib/components';
import EditorView from "./EditorView";

export default function PageEditor() {
  const fileHandle = useRef(null);
  const [data, setData] = useState("");
  const [viewData, setViewData] = useState("");

  const onOpenFile = async () => {
    const [newFsHandle] = await window.showOpenFilePicker({
      types: [{ description: "Markdown Files" }],
      excludeAcceptAllOption: true,
      multiple: false,
    });

    fileHandle.current = newFsHandle;
    const reader = new FileReader();
    reader.onload = () => {
      setData(reader.result);
      setViewData(reader.result);
    };
    const file = await newFsHandle.getFile();
    reader.readAsText(file);
  };

  const onSaveClick = async () => {
    const writable = await fileHandle.current.createWritable();
    await writable.write(viewData);
    await writable.close();
  };

  const onRevertClick = async () => {
    setViewData(data);
  };

  return (
    <div className={s.appBody}>
      <Stack space="lg" align="left">
        <div>
          <Button block onClick={onOpenFile}>Open File</Button>
        </div>
        <EditorView onChange={setViewData} value={viewData}/>
        <Inline space="sm">
          <Button onClick={onSaveClick}>Save</Button>
          <Button onClick={onRevertClick}>Revert</Button>
        </Inline>
      </Stack>
    </div>
  );
}
