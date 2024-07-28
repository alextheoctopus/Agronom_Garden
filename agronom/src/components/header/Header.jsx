import { Stack, Typography, Button } from "@mui/material";

const Header = (props) => {
    return (<>
        <Button onClick={() => props.setPopupWindow(!props.popupWindow)}>Добавить</Button>
    </>);
}

export default Header;