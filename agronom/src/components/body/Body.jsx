import { useContext } from "react";
import { AppContext } from "../AppContext";

const Body = () => {
    const {popupWindow}=useContext(AppContext);
    return (<>
    {popupWindow? <PopUpWindow></PopUpWindow>}
    </>);
}

export default Body;