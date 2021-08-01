import {style} from "@vanilla-extract/css";

export default {
  inlineRoot: style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }),
  inlineChild: style({
    display: 'block',
    justifyContent: 'flex-start'
  })
}
