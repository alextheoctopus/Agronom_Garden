import { Button } from '@mui/material';
const Header = () => {
    return (<>
        <Button onClick={setPopUpWindow(!popupWindow)}>Добавить</Button>
    </>);
}

export default Header;