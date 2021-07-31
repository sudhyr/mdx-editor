import React, { useState, useRef } from "react";
import s from "./common.css";

export default function PageEditor() {
  const fileHandle = useRef(null);
  const [data, setData] = useState("");
  const [updatedData, setUpdatedData] = useState("");

  const onChangeFileClick = async (e) => {
    const file = e.target.files[0];
    fileHandle.current = file;
    const reader = new FileReader();
    reader.onload = () => {
      setData(reader.result);
      setUpdatedData(reader.result);
    };
    reader.readAsText(file);
  };

  const onOpenFile = async () => {
    const [newFsHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: "Markdown Files",
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    });

    fileHandle.current = newFsHandle;
    const reader = new FileReader();
    reader.onload = () => {
      setData(reader.result);
      setUpdatedData(reader.result);
    };
    const file = await newFsHandle.getFile();
    reader.readAsText(file);
  };

  const onSaveClick = async () => {
    const writable = await fileHandle.current.createWritable();

    // Write the contents of the file to the stream.
    await writable.write(updatedData);

    // Close the file and write the contents to disk.
    await writable.close();
  };

  return (
    <div className={s.appBody}>
      <div className={s.explorerView}>
        <div>
          <button onClick={onOpenFile}>Open File</button>
          {/* <input type="file" onChange={onOpenFileClick} /> */}

          <textarea
            defaultValue={data}
            onChange={(e) => setUpdatedData(e.target.value)}
          />

          <button onClick={onSaveClick}>Save</button>
        </div>
      </div>
    </div>
  );
}
