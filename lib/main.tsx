export * from "@mui/material";
export { Column } from "./components/Column";
export { Row } from "./components/Row";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import * as ReactDOM from "react-dom/client";

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
  App: FC
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

      const theme = createTheme();

      const queryClient = new QueryClient({});

      const root = ReactDOM.createRoot(frame);
      root.render(
        <CacheProvider value={cache}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </QueryClientProvider>
        </CacheProvider>
      );
    }
  }

  customElements.define(info.component, XElement);
};
