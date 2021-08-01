import { createTheme } from "@vanilla-extract/css";

const [componentThemeClass, componentThemeVars] = createTheme({
  color: {
    brand: "#2765cf",
    text: {
      light: "#FFFFFF"
    }
  },
  ff: {
    body: ['Lato', 'sans-serif'].join(','),
  },
  fs: {
    sm: "14",
    md: "20",
    lg: "24",
    xl: "32",
    xxl: "42",
  },
  radius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px'
  }
});

export const themeClass = componentThemeClass;
export const vars = componentThemeVars;
