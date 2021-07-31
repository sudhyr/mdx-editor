import React, { useState } from "react";
import s from "./common.css";

export default function PageEditor() {
  const [data, setData] = useState("");

  const onOpenFileClick = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      setData(reader.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className={s.appBody}>
      <div className={s.explorerView}>
        <input type="file" onChange={onOpenFileClick} />
        <pre>{data}</pre>
      </div>
    </div>
  );
}
