import PopupWindow from "./PopupWindow";

const Body = (props) => {
    if(props.popupWindow) {
        console.log("PopupWindow");
    }
    return (<>
        {props.popupWindow ? <PopupWindow></PopupWindow> : ''}
    </>);
}

export default Body;