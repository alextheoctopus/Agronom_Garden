import PopupWindow from "./PopUp";
import ListOfPersons from "./ListOfPersons";
const Body = (props) => {
    if (props.popupWindow) {
        console.log("PopupWindow");
    }
    return (<>
        {props.popupWindow ? <PopupWindow setPopupWindow={props.setPopupWindow}></PopupWindow> : ''}
        <ListOfPersons></ListOfPersons>
    </>);
}

export default Body;