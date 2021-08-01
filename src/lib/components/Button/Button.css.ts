import { style } from "@vanilla-extract/css";
import { vars } from '../theme.css'

export default {
  buttonRoot: style({
    color: vars.color.text.light,
    display: "block",
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
    WebkitTapHighlightColor: 'transparent',
    background: 'none',
    cursor: 'pointer',
    width: '100%',
    position: 'relative',
    borderRadius: vars.radius.md,
    overflow: "hidden",
    textDecoration: 'none',
    outline: 'none'
  }),
  buttonBg: style({
    background: vars.color.brand,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }),
  buttonContent: style({
    position: 'relative',
    padding: `8px 12px`,
    fontFamily: vars.ff.body,
    fontSize: vars.fs.md
  }),
  text: style({
    fontSize: 'Arial'
  })
}
