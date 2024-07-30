import { Box, Stack, Input, Button, Typography, Checkbox } from "@mui/material";

import { overlay, popup, fieldStyle, inputField } from "../../styles/AdditionalStyles";

import Registration from "./inputForms/Registration";
import Editing from "./inputForms/Editing";
const PopupWindow = (props) => {

    return (
        <Box sx={overlay}>
                <Box color={"#FFFFF"} sx={popup}>
                    <Stack container>
                        <Stack direction="column" marginTop="66px">
                            <Stack direction="row">
                                <Stack direction="column" sx={{ position: "absolute", left: "416px" }} alignItems="flex-start">
                                    <Typography sx={fieldStyle}>ФИО</Typography>
                                    <Typography sx={fieldStyle}>Компания</Typography>
                                    <Typography sx={fieldStyle}>Группа</Typography>
                                    <Typography sx={fieldStyle}>Пристуствие</Typography>
                                </Stack>
                                {props.popupWindow == 'Reg' ?
                                    <Registration setPopupWindow={props.setPopupWindow}
                                        ></Registration> :
                                    props.popupWindow == 'Edit' ?
                                        <Editing setPopupWindow={props.setPopupWindow}></Editing> : ''}

                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
        </Box>
    );
}

export default PopupWindow;
