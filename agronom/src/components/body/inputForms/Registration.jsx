import { Box, Stack, Input, Button, Typography, Checkbox } from "@mui/material";
import { inputField } from "../../../styles/AdditionalStyles"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson,activeCount } from "../../../store/features/persons";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { buttonStyle } from "../../../styles/AdditionalStyles";
const theme = createTheme();

const Registration = (props) => {
    const dispatch = useDispatch();
    const persons=useSelector(state=>state.persons);
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

    const [errors, setErrors] = useState({
        name: false,
        company: false,
        select: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: false
        });
    };

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
        const restrictedChars = "1234567890!@#$%^&*()_+-={}[]|;:\<>,.?/";

        if (restrictedChars.indexOf(event.key) !== -1) {
            event.preventDefault(); 
        }
    }

    const handleKeyPress = (event) => {
        noDigits(event);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(addPerson({ name: formData.name, presence: formData.checkbox, company: formData.company, group: formData.select }))
            dispatch(activeCount());
            props.setPopupWindow('');
        } else {
            console.log('Validation failed');
        }
    };
    return (
        <>
            <Stack direction={"column"} sx={{ position: "absolute", left: "690px" }} alignItems="flex-start">
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    sx={inputField} disableUnderline={true}></Input>
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
                                transform: 'none', 
                                position: 'absolute', 
                                top: '50%', 
                                transform: 'translateY(-40%)', 
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
                            <MenuItem value="Прохожий">Прохожий</MenuItem>
                            <MenuItem value="Клиент">Клиент</MenuItem>
                            <MenuItem value="Партнёр">Партнёр</MenuItem>
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
            <Stack direction="row" sx={{ position: "absolute", left: "424px", top: "466px" }}>
                <ThemeProvider theme={theme}>
                    <Button type="submit" variant="contained" onClick={handleSubmit}
                        sx={{
                            ...buttonStyle,
                            backgroundColor: "#4CAF50",
                        }}>Добавить</Button>
                    <Button variant="contained"
                        sx={{
                            ...buttonStyle,
                            backgroundColor: '#737373',
                            marginLeft: "34px"
                        }}
                        onClick={() => props.setPopupWindow('')
                        }
                    >Закрыть</Button>
                </ThemeProvider>
            </Stack >
        </>);
}

export default Registration;