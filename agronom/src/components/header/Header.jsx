import { Stack, Typography, Button, Input, Grid } from "@mui/material";
import { buttonStyle } from "../../styles/AdditionalStyles";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
const Header = (props) => {
    const inputNameHandler = (event) => props.setValueName(event.target.value);
    const inputCompanyHandler = (event) => props.setValueCompany(event.target.value);
    let style = {
        position: 'absolute', top: '59px',
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)", fontSize: 16, color: "#737373",
        fontFamily: "OpenSans, sans-serif", fontWeight: 400, padding: '5px', width: '394px', height: '52px'
    }
    const persons = useSelector(state => state.persons);
    return (
        <Stack direction="row">
            <Logo></Logo>
            <Input sx={{ ...style, left: '270px' }} onChange={inputNameHandler} placeholder="Поиск по имени" disableUnderline={true}></Input>
            <Input sx={{ ...style, left: '679px' }} onChange={inputCompanyHandler} placeholder="Поиск по компании" disableUnderline={true}></Input>
            <Button sx={{
                ...buttonStyle,
                backgroundColor: "#4CAF50",
                left: '1117px',
                position: 'absolute',
                top: '59px'
            }} onClick={() => props.setPopupWindow('Reg')}>Добавить</Button>
            <Stack direction="column">
                <Typography sx={{
                    position: 'absolute', top: '28px', left: "1810px", fontWeight: 700,
                    fontSize: "30px",
                    textAlign: "right",
                    color: '#4e3000'
                }}>Посетители</Typography>

                <Grid container maxWidth={100} columnSpacing={{ sm: 3 }} sx={{ position: "absolute", top: "74px", left: "1880px" }}>
                    <Grid item>
                        <Typography sx={{
                            position: 'absolute',
                            fontWeight: 700,
                            fontSize: "30px",
                            textAlign: "right", color: '#80bb00'
                        }}>{persons.activePersons}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontWeight: 700,
                            fontSize: "30px",
                            textAlign: "right",
                            color: '#4e3000'
                        }}>/</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            position: 'absolute',
                            fontWeight: 700,
                            fontSize: "30px",
                            textAlign: "right", color: '#ec5937'
                        }}>{persons.nonActivePersons}</Typography>
                    </Grid>

                </Grid>
            </Stack >
        </Stack >);
}

export default Header;