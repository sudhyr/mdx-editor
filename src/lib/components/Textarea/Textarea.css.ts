import {style} from "@vanilla-extract/css";
import {vars} from "../theme.css";

const styles = {
  textareaRoot: style({
    display: "block",
    appearance: "none",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: vars.radius.md,
    minHeight: '120px',
    padding: '8px',
    fontFamily: vars.ff.body,
    fontSize: vars.fs.md
  })

}

export default styles;
