export * from "@mui/material";
export { Column } from "./components/Column";
export { Row } from "./components/Row";
import { FC } from "react";
declare global {
    interface Window {
        RTB2_MENUS: {
            [key: string]: {
                name: string;
                path: string;
                component: string;
                submenus: {
                    label: string;
                    value: string;
                }[];
            };
        };
    }
}
export declare const initRTB2App: (key: string, info: {
    name: string;
    path: string;
    component: string;
    submenus: {
        label: string;
        value: string;
    }[];
}, App: FC) => void;
