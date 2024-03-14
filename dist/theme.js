import "./assets/theme.css";
import "react/jsx-runtime";
import "./components/Column/index.js";
import "./components/Row/index.js";
import "./client-42d26036.js";
import { c as r } from "./createTheme-3a6629d7.js";
import { r as e } from "./grey-c051ab9f.js";
const n = r({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: e.A400
    }
  },
  typography: {
    fontFamily: "Pretendard"
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".Mui-disabled": {
            backgroundColor: "#EFF2F5"
          }
        }
      }
    }
  }
});
export {
  n as default
};
