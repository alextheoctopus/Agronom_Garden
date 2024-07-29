import { Box, Stack, Input, Button, Typography, Checkbox } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { overlay, popup, fieldStyle,inputField } from "../../styles/AdditionalStyles";
import { useDispatch } from "react-redux";
import { addPerson } from "../../store/features/persons";
const theme = createTheme();
const PopupWindow = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        select: '',
        checkbox: false
    });

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            checkbox: e.target.checked
        });
    };

    // State to manage form validation errors
    const [errors, setErrors] = useState({
        name: false,
        company: false,
        select: false,
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Reset errors on input change
        setErrors({
            ...errors,
            [name]: false
        });
    };

    // Validate inputs
    const validate = () => {
        const newErrors = {
            name: formData.name === '',
            company: formData.company === '',
            select: formData.select === ''
        };
        setErrors(newErrors);
        return !newErrors.name && !newErrors.company && !newErrors.select;
    };

    function noDigits(event) {
        // Define a string with characters to be restricted (digits and specific symbols)
        const restrictedChars = "1234567890!@#$%^&*()_+-={}[]|;:'\"<>,.?/";

        // Check if the pressed key is in the restricted characters list
        if (restrictedChars.indexOf(event.key) !== -1) {
            event.preventDefault(); // Prevent the default action (input)
        }
    }

    const handleKeyPress = (event) => {
        // Call the noDigits function to restrict input
        noDigits(event);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(addPerson({ name: formData.name, presence: formData.checkbox, company: formData.company, group: formData.select }))
            props.setPopupWindow(false);
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <Box sx={overlay}>
            <form onSubmit={handleSubmit}>
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
                                <Stack direction={"column"} sx={{ position: "absolute", left: "690px" }} alignItems="flex-start">
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyPress}
                                        sx={inputField} disableUnderline={true}>sjnissn</Input>
                                    {errors.name && <Typography sx={{ color: 'red' }}>This field is required.</Typography>}
                                    <Input
                                        type="text"
                                        name="company"
                                        onKeyDown={handleKeyPress}
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        sx={inputField} disableUnderline={true}></Input>
                                    {errors.company && <Typography sx={{ color: 'red' }}>This field is required.</Typography>}
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
                                                    transform: 'translateY(-40%)', // Center vertically
                                                    color: '#000000',
                                                    marginLeft: "31px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                Выбрать
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="select"
                                                value={formData.select}
                                                onChange={handleInputChange}
                                                error={errors.select}
                                                sx={{
                                                    height: '52px',
                                                    width: '502px',
                                                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
                                                }} variant="standard" disableUnderline={true}>
                                                <MenuItem value="other">Прохожий</MenuItem>
                                                <MenuItem value="client">Клиент</MenuItem>
                                                <MenuItem value="partner">Партнёр</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {errors.select && <Typography sx={{ color: 'red' }}>This field is required.</Typography>}
                                    </Box>
                                    <Box sx={{ height: "52px" }}>
                                        <Checkbox
                                            checked={formData.checkbox}
                                            onChange={handleCheckboxChange}
                                            name="checkbox"
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    width: '34px',
                                                    height: '34px'
                                                }
                                            }}
                                        />
                                    </Box>
                                </Stack >
                            </Stack>
                            <Stack direction="row" sx={{ position: "absolute", left: "424px", top: "466px" }}>
                                <ThemeProvider theme={theme}>
                                    <Button type="submit" variant="contained"
                                        sx={{
                                            backgroundColor: "#4CAF50",
                                            boxShadow: "0 3px 3px 0 rgba(0, 0, 0, 0.16)",
                                            width: 273,
                                            height: 52,
                                            fontFamily: 'Roboto',
                                            fontWeight: 400,
                                            fontSize: "24px",
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: '#3E8C41', // Darker shade on hover
                                            },
                                            '&:active': {
                                                backgroundColor: '#245526', // Darker shade on click
                                            },
                                        }}>Добавить</Button>
                                    <Button variant="contained"
                                        sx={{
                                            backgroundColor: '#737373',
                                            boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.16)',
                                            width: 273,
                                            height: 52,
                                            fontFamily: 'Roboto',
                                            fontWeight: 400,
                                            fontSize: "24px",
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: '#616161', // Darker shade on hover
                                            },
                                            '&:active': {
                                                backgroundColor: '#4a4a4a', // Darker shade on click
                                            },
                                            marginLeft: "34px"
                                        }}
                                        onClick={() => props.setPopupWindow(false)}>Закрыть</Button>
                                </ThemeProvider>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </form>
        </Box>
    );
}

export default PopupWindow;