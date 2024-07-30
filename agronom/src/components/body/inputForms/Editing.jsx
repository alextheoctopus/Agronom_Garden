import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Box, Stack, Button, Input, Typography, Checkbox } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { inputField } from "../../../styles/AdditionalStyles";
import { activeCount, deletePerson, updatePerson } from "../../../store/features/persons";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();

const Editing = (props) => {
    const editingPerson = useSelector(state => state.persons);
    let index = editingPerson.editingPersonIndex;
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        select: '', 
        checkbox: false
    });

    useEffect(() => {
        if (editingPerson.personsList && editingPerson.personsList.length > 0) {
            setFormData({
                name: editingPerson.personsList[index].name,
                company: editingPerson.personsList[index].company,
                select: '',
                checkbox: editingPerson.personsList[index].presence
            });
        }
    }, [editingPerson, index]);

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
            dispatch(updatePerson({ index: index, name: formData.name, presence: formData.checkbox, company: formData.company, group: formData.select }));
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
                    value={formData.company}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    sx={inputField} disableUnderline={true}></Input>
                {errors.company && <Typography sx={{ color: 'red' }}>This field is required.</Typography>}
                <Box sx={{ width: 502, marginBottom: "48px", height: "52px" }}>
                    <FormControl fullWidth error={errors.select}>
                        <InputLabel
                            id="demo-simple-select-label"
                            sx={{
                                fontSize: 30,
                                fontFamily: "OpenSans, sans-serif",
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-40%)',
                                color: errors.select ? 'red' : '#000000',
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
                            sx={{
                                height: '52px',
                                width: '502px',
                                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)",
                            }} variant="standard" disableUnderline={true}>
                            <MenuItem value="Прохожий" sx={{
                                fontSize: 30,
                                fontFamily: "OpenSans, sans-serif",
                                fontWeight: 400,
                            }}>Прохожий</MenuItem>
                            <MenuItem value="Клиент" sx={{
                                fontSize: 30,
                                fontFamily: "OpenSans, sans-serif",
                                fontWeight: 400,
                            }}>Клиент</MenuItem>
                            <MenuItem value="Партнёр" sx={{
                                fontSize: 30,
                                fontFamily: "OpenSans, sans-serif",
                                fontWeight: 400,
                            }}>Партнёр</MenuItem>
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
                </Box></Stack>
            <Stack direction="row" sx={{ position: "absolute", left: "424px", top: "466px" }}>
                <ThemeProvider theme={theme}>
                    <Button type="submit" variant="contained" onClick={handleSubmit}
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
                                backgroundColor: '#3E8C41',  
                            },
                            '&:active': {
                                backgroundColor: '#245526', 
                            },
                        }}>Редактировать</Button>
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
                                backgroundColor: '#616161', 
                            },
                            '&:active': {
                                backgroundColor: '#4a4a4a',
                            },
                            marginLeft: "34px"
                        }}
                        onClick={() => props.setPopupWindow('')
                        }
                    >Закрыть</Button>
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
                                backgroundColor: 'red', 
                            },
                            '&:active': {
                                backgroundColor: 'red', 
                            },
                            marginLeft: "34px"
                        }}
                        onClick={() => { dispatch(deletePerson(index)); props.setPopupWindow(false) }
                        }
                    >Удалить</Button>
                </ThemeProvider>
            </Stack>
        </>
    );
}

export default Editing;