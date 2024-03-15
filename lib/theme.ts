
import { red } from "./colors";
import { createTheme } from "./main";

import "pretendard/dist/web/static/pretendard.css";

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#F3F4F6",
        }
    },
    typography: {
        fontFamily: "Pretendard",
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    ".Mui-disabled": {
                        backgroundColor: "#EFF2F5",
                    },
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                variant: 'outlined'
            }
        }
    },
});

export default theme;
