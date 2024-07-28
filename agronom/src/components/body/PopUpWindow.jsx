import { Box, Stack, Input, Typography, Checkbox } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
// import { styled } from '@mui/system';

// const CustomSelect = styled(Select)(({ theme }) => ({
//     '& .MuiSelect-select': {
//         backgroundColor: 'lightblue',
//         padding: '10px 20px',
//         borderRadius: '8px',
//         '&:focus': {
//             backgroundColor: 'lightblue',
//         },
//     },
//     '& .MuiOutlinedInput-notchedOutline': {
//         borderColor: 'blue',
//     },
//     '&:hover .MuiOutlinedInput-notchedOutline': {
//         borderColor: 'darkblue',
//     },
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//         borderColor: 'darkblue',
//     },
//     '& .MuiSvgIcon-root': {
//         color: '#737373',
//     },
// }));
const PopupWindow = () => {
    let overlay = {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "rgba(0, 0, 0, 0.7)",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "zIndex": 1000,
    }

    let popup = {
        "position": "absolute",
        "top": 363,
        "left": 316,
        "width": 1461,
        "height": 581,
        "background": "white",
        "borderRadius": "30px",
        "zIndex": 1001,
        "alignItems": "center",

    }

    let fieldStyle = {
        "fontWeight": 600,
        "fontSize": "32px",
        "color": "#4e3000",
        "marginBottom": "48px",
        "marginTop": 0,
        "height": "52px"
    }
    const [checked, setChecked] = useState(false);
    const [group, setGroup] = useState('');
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Box sx={overlay}>
            <Box color={"#FFFFF"} sx={popup}>
                <Stack container marginTop="66px">
                    <Stack direction="row">
                        <Stack direction="column" sx={{ position: "absolute", left: "416px" }} alignItems="flex-start">
                            <Typography sx={fieldStyle}>ФИО</Typography>
                            <Typography sx={fieldStyle}>Компания</Typography>
                            <Typography sx={fieldStyle}>Группа</Typography>
                            <Typography sx={fieldStyle}>Пристуствие</Typography>
                        </Stack>
                        <Stack direction={"column"} sx={{ position: "absolute", left: "690px" }} alignItems="flex-start">
                            <Input sx={{ marginBottom: "48px", height: "52px" }}></Input>
                            <Input sx={{ marginBottom: "48px", height: "52px" }}></Input>
                            <Box sx={{ width: 502, marginBottom: "48px", height: "52px" }}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="demo-simple-select-label"
                                        sx={{
                                            fontSize: 30,
                                            fontFamily: "OpenSans, sans-serif",
                                            transform: 'none', // Remove the default transform
                                            position: 'absolute', // Adjust position
                                            top: '50%', // Center vertically
                                            transform: 'translateY(-50%)', // Center vertically
                                            color: '#000000',
                                            marginLeft: "31px",
                                            fontWeight: "400",
                                            paddingTop: '0', paddingBottom: '0'
                                        }}
                                    >
                                        Выбрать
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={group}
                                        onChange={handleChange}
                                        sx={{
                                            height: '52px',
                                            width: '502px',
                                            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
                                            paddingTop: '0', paddingBottom: '0'
                                        }}>
                                        <MenuItem >Прохожий</MenuItem>
                                        <MenuItem >Клиент</MenuItem>
                                        <MenuItem >Партнёр</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ height: "52px" }}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            width: '34px',
                                            height: '34px',
                                            stroke: "#757575",
                                            strokeWidth: "1px",
                                            marginBottom:"48px"
                                        }
                                    }}
                                />
                            </Box>
                        </Stack >
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default PopupWindow;