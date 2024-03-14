export * from "@mui/material";
export { Column } from "./components/Column";
export { Row } from "./components/Row";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import * as ReactDOM from "react-dom/client";
import theme from "./theme";
import { ReactNode } from "react";

declare global {
  interface Window {
    RTB2_MENUS: {
      [key: string]: {
        name: string;
        path: string;
        component: string;
        submenus: { label: string; value: string }[];
      };
    };
  }
}

export const initRTB2App = (
  key: string,
  info: {
    name: string;
    path: string;
    component: string;
    submenus: { label: string; value: string }[];
  },
  app: ReactNode
) => {
  if (!window.RTB2_MENUS) window.RTB2_MENUS = {};

  Object.assign(window.RTB2_MENUS, {
    [key]: info,
  });

  class XElement extends HTMLElement {
    connectedCallback() {
      const frame = document.createElement("div");
      frame.style.display = "flex";
      frame.style.flexDirection = "column";
      frame.style.flex = "1";
      this.appendChild(frame);

      const cache = createCache({
        key: info.component,
        prepend: true,
        container: frame,
      });

      const root = ReactDOM.createRoot(frame);
      root.render(
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {app}
          </ThemeProvider>
        </CacheProvider>
      );
    }
  }

  customElements.define(info.component, XElement);
};
