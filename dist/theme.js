import "./assets/theme.css";
import "./components/Column/index.js";
import "./components/Row/index.js";
import { c as r } from "./createTheme-ed77b13f.js";
import { r as e } from "./grey-c051ab9f.js";
const d = r({
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
  d as default
};
