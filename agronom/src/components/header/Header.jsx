import { Stack, Typography, Button, Input } from "@mui/material";

const Header = (props) => {
    const inputNameHandler = (event) => props.setValueName(event.target.value);
    const inputCompanyHandler = (event) => props.setValueCompany(event.target.value);

    return (
        <Stack direction="row">
            <Input onChange={inputNameHandler} ></Input>
            <Input onChange={inputCompanyHandler} ></Input>
            <Button onClick={() => props.setPopupWindow('Reg')}>Добавить</Button>
        </Stack >);
}

export default Header;