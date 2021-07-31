import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0
});

export default {
  appBody: style({
    background: 'aliceblue',
    height: '100vh',
    width: '100vw',
    display: 'flex'
  }),

  explorerView: style({
    height: '100vh'
  })
}
