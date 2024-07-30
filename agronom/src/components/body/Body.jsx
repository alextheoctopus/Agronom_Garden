import PopupWindow from "./PopUp";
import ListOfPersons from "./ListOfPersons";
import SortComponent from "./SortComponent";
import { useState } from "react";
const Body = (props) => {
    const [sort, setSort] = useState('none');

    return (<>
        {props.popupWindow ? <PopupWindow popupWindow={props.popupWindow} setPopupWindow={props.setPopupWindow}></PopupWindow> : ''}
        <ListOfPersons sort={sort} valueCompany={props.valueCompany} valueName={props.valueName} setPopupWindow={props.setPopupWindow}></ListOfPersons>
        <SortComponent sort={sort} setSort={setSort}></SortComponent>
        
    </>);
}

export default Body;