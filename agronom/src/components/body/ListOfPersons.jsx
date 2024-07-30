import { Typography, Stack, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { personalFieldStyle, indicator, nameOfFields } from "../../styles/AdditionalStyles";
import PopupWindow from "./PopUp";
import { getEditingPersonIndex } from "../../store/features/persons";
const ListOfPersons = (props) => {
    const persons = useSelector(state => state.persons)
    const dispatch = useDispatch();


    const regexName = new RegExp(`^${props.valueName}`, "i");
    const regexCompany = new RegExp(`^${props.valueCompany}`, "i");

    console.log("listOfPersons", regexCompany.test(persons.personsList[0].company))
    return (
        <Stack direction="column">
            <Stack direction="row" sx={{ position: 'absolute', top: '145px' }}>
                <Typography sx={{ left: "53px", ...nameOfFields }}>Номер</Typography>
                <Typography sx={{ left: "270px", ...nameOfFields }}>ФИО</Typography>
                <Typography sx={{ left: "780px", ...nameOfFields }}>Компания</Typography>
                <Typography sx={{ left: "1181px", ...nameOfFields }}>Группа</Typography>
                <Typography sx={{ left: "1839px", ...nameOfFields }}>Присутствие</Typography>
            </Stack>
            <Box sx={{
                position: 'absolute',
                top: '179px',
                width: '1948px',
                height: '4px',
                left: '50px',
                backgroundColor: '#e9e9e9',
            }}>
            </Box>
            <Box>
                <Stack direction={"column"} marginTop={"31px"} justifyContent="stretch" alignItems="stretch" sx={{ position: 'absolute', left: '53px', top: '180px' }}>
                    {(props.valueName || props.valueCompany) ?
                        persons.personsList.map((pers, index) =>
                            regexName.test(pers.name) && regexCompany.test(pers.company) ?
                                <Button sx={{ marginBottom: '70px' }} key={index} onClick={() => { dispatch(getEditingPersonIndex(index)); props.setPopupWindow('Edit') }}>
                                    <Stack direction={'row'}>
                                        <Typography sx={{
                                            position: 'absolute', left: '33px', color: '#000000', fontSize: 30, fontFamily: "OpenSans, sans-serif",
                                            fontWeight: 400
                                        }}>{index + 1}</Typography>
                                        <Typography left="225px" width='394px' sx={personalFieldStyle}>{pers.name}</Typography>
                                        <Typography left='736px' width='300px' sx={personalFieldStyle}>{pers.company}</Typography>
                                        <Typography left='1138px' width='300px' sx={personalFieldStyle}>{pers.group}</Typography>
                                        {pers.presence ?
                                            <Box backgroundColor='#80BB00' sx={indicator} ></Box>
                                            : <Box backgroundColor='#EC5937' sx={indicator}></Box>}
                                    </Stack>
                                </Button> : <></>)
                        : persons.personsList.map((pers, index) => {
                            return (
                                <Button sx={{ marginBottom: '70px' }} key={index} onClick={() => { dispatch(getEditingPersonIndex(index)); props.setPopupWindow('Edit') }}>
                                    <Stack direction={'row'}>
                                        <Typography sx={{
                                            position: 'absolute', left: '33px', color: '#000000', fontSize: 30, fontFamily: "OpenSans, sans-serif",
                                            fontWeight: 400
                                        }}>{index + 1}</Typography>
                                        <Typography left="225px" width='394px' sx={personalFieldStyle}>{pers.name}</Typography>
                                        <Typography left='736px' width='300px' sx={personalFieldStyle}>{pers.company}</Typography>
                                        <Typography left='1138px' width='300px' sx={personalFieldStyle}>{pers.group}</Typography>
                                        {pers.presence ?
                                            <Box backgroundColor='#80BB00' sx={indicator} ></Box>
                                            : <Box backgroundColor='#EC5937' sx={indicator}></Box>}
                                    </Stack>
                                </Button>
                            )
                        })}
                </Stack>
            </Box >
        </Stack >
    );
}

export default ListOfPersons;