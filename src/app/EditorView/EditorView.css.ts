import {globalStyle, style} from "@vanilla-extract/css";

export default {
  splitPaneContainer: style({
    position: "relative",
    height: '70vh',
    minHeight: '400px',
    width: '100%'
  }),
  splitPaneRoot: style({})
}

globalStyle('.Resizer', {
  background: '#000',
  opacity: 0.2,
  boxSizing: 'border-box',
  backgroundClip: 'padding-box',
})

globalStyle('.Resizer:hover', {
  transition: 'all 2s ease'
})

globalStyle('.Resizer.vertical', {
  width: '11px',
  margin: '0 -5px',
  borderLeft: '5px solid rgba(255, 255, 255, 0)',
  borderRight: '5px solid rgba(255, 255, 255, 0)',
  cursor: 'col-resize',
})
