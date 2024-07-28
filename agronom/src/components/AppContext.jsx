import { createContext } from "react";

export const AppContext = createContext(
    {
        popupWindow: false,
        setPopupWindow: () => { return null },
        dispatch: () => { return null },
    });