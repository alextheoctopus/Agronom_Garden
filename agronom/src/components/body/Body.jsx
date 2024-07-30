import PopupWindow from "./PopUp";
import ListOfPersons from "./ListOfPersons";
import { Typography, Stack, Button } from "@mui/material";
const Body = (props) => {
    console.log("PopupWindow", props.popupWindow);

    return (<>
        {props.popupWindow ? <PopupWindow popupWindow={props.popupWindow} setPopupWindow={props.setPopupWindow}></PopupWindow> : ''}
        <ListOfPersons valueCompany={props.valueCompany} valueName={props.valueName} setPopupWindow={props.setPopupWindow}></ListOfPersons>
        <Stack direction="row">
            <Typography>Фильтровать по</Typography>
            <Button sx={{
                position: 'absolute',
                left: "390px",
                top: "1445px",
                backgroundColor:'transparent',
                '&:hover': {
                    backgroundColor: '#3E8C41', // Darker shade on hover
                },
                '&:active': {
                    backgroundColor: '#245526', // Darker shade on click
                }
            }}>Отсутствующим</Button>
            <Button sx={{
                position: 'absolute',
                left: "390px",
                top: "1445px",
                backgroundColor:'transparent',
                '&:hover': {
                    backgroundColor: '#3E8C41', // Darker shade on hover
                },
                '&:active': {
                    backgroundColor: '#245526', // Darker shade on click
                }
            }}>Присутствующим</Button>
            <Button sx={{
                position: 'absolute',
                left: "390px",
                top: "1445px",
                backgroundColor:'transparent',
                '&:hover': {
                    backgroundColor: '#3E8C41', // Darker shade on hover
                },
                '&:active': {
                    backgroundColor: '#245526', // Darker shade on click
                }
            }}>Без фильтра</Button>
        </Stack>
    </>);
}

export default Body;