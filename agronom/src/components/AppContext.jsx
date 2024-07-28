import { createContext } from "react";

export const AppContext = createContext(
    {
        popupWindow: false,
        setPopupWindow: () => { }
    }
);