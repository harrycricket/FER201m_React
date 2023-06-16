import { deepOrange } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          brands: {
            main: "#152100",
            contrastText: "#b3b3b3",
            secondary: "#ff0000",
          },
          tab: {
            main: "#828282",
            contrastText: "#080017",
          },
          // palette values for light mode
          divider: {
            main: "#000000",
          },
          text: {
            primary: "#060017",
            secondary: "#00281a",
            brands: "#0d2107",
            p: "#0b2f00",
          },
          background: {
            default: "#eefdfa",
            paper: "#dfdfdf",
            nav: "#99DBF5",
            paper2: "#bebebe",
          },
        }
      : {
          divider: "#ff9b9b",
          tab: {
            main: "#828282",
            contrastText: "#080017",
          },
          background: {
            default: "#252b2a",
            paper: "#545454",
            nav: "#191919",
            paper2: "#454545",
          },
          text: {
            primary: "#ffffff",
            secondary: "#99DBF5",
            brands: "#99DBF5",
            p: "#99DBF5",
          },
          brands: {
            main: "#99DBF5",
            secondary2: "#ff3030",
          },
        }),
  },
});

export default getDesignTokens;
