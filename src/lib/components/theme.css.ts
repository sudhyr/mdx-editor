import {createTheme, globalStyle} from "@vanilla-extract/css";

const [varsClassContainer, componentThemeVars] = createTheme({
  color: {
    brand: "#2765cf",
    text: {
      brand: "#2765cf",
      neutral: "#FFFFFF",
    },
  },
  space: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",

    // contentgap
    gap_xs: "8px",
    gap_sm: "16px",
    gap_md: "32px",
    gap_lg: "48px",
    gap_xl: "56px",
    gap_xxl: "64px",
  },
  ff: {
    body: ["Lato", "sans-serif"].join(","),
  },
  fs: {
    sm: "14",
    md: "20",
    lg: "24",
    xl: "32",
    xxl: "42",
  },
  radius: {
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "12px",
  },
});

globalStyle('Resizer', {
  background: '#000',
  opacity: 0.2,
  zIndex: 1,
  boxSizing: 'border-box',
  backgroundClip: 'padding-box',
})

globalStyle('Resizer.vertical', {
  width: '11px',
  margin: '0 -5px',
  borderLeft: '5px solid rgba(255, 255, 255, 0)',
  borderRight: '5px solid rgba(255, 255, 255, 0)',
  cursor: 'col-resize'
})

export const themeClassContainer = varsClassContainer;
export const vars = componentThemeVars;
