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
// PopupWindow.jsx

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Button } from '@mui/material';
// import { setTextFieldValue, setSelectValue, setCheckboxValue } from './formSlice';

// const FormComponent = () => {
//   const dispatch = useDispatch();
//   const { textFieldValue, selectValue, checkboxValue } = useSelector((state) => state.form);

//   const handleTextFieldChange = (event) => {
//     dispatch(setTextFieldValue(event.target.value));
//   };

//   const handleSelectChange = (event) => {
//     dispatch(setSelectValue(event.target.value));
//   };

//   const handleCheckboxChange = (event) => {
//     dispatch(setCheckboxValue(event.target.checked));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//     console.log('Form submitted with values:', { textFieldValue, selectValue, checkboxValue });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <FormControl fullWidth margin="normal" required>
//         <TextField
//           label="Text Field"
//           value={textFieldValue}
//           onChange={handleTextFieldChange}
//           required
//         />
//       </FormControl>

//       <FormControl fullWidth margin="normal" required>
//         <InputLabel id="select-label">Select</InputLabel>
//         <Select
//           labelId="select-label"
//           value={selectValue}
//           onChange={handleSelectChange}
//           required
//         >
//           <MenuItem value="option1">Option 1</MenuItem>
//           <MenuItem value="option2">Option 2</MenuItem>
//           <MenuItem value="option3">Option 3</MenuItem>
//         </Select>
//       </FormControl>

//       <FormControl margin="normal">
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={checkboxValue}
//               onChange={handleCheckboxChange}
//             />
//           }
//           label="Checkbox"
//         />
//       </FormControl>

//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default FormComponent;


// const PopupWindow = (props) => {
//     const dispatch = useDispatch();
//     const editingPerson = useSelector(state => state.persons);
//     const index = editingPerson.editingPersonIndex;
  
//     const [formData, setFormData] = useState({
//       name: '',
//       company: '',
//       select: '',
//       checkbox: false
//     });
  
//     const handleCheckboxChange = (e) => {
//       setFormData({
//         ...formData,
//         checkbox: e.target.checked
//       });
//     };
  
//     // State to manage form validation errors
//     const [errors, setErrors] = useState({
//       name: false,
//       company: false,
//       select: false,
//     });
  
//     // Handle input change
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value
//       });
  
//       // Reset errors on input change
//       setErrors({
//         ...errors,
//         [name]: false
//       });
//     };
  
//     // Validate inputs
//     const validate = () => {
//       const newErrors = {
//         name: formData.name === '',
//         company: formData.company === '',
//         select: formData.select === ''
//       };
//       setErrors(newErrors);
//       return !newErrors.name && !newErrors.company && !newErrors.select;
//     };
  
//     function noDigits(event) {
//       // Define a string with characters to be restricted (digits and specific symbols)
//       const restrictedChars = "1234567890!@#$%^&*()_+-={}[]|;:'\"<>,.?/";
  
//       // Check if the pressed key is in the restricted characters list
//       if (restrictedChars.indexOf(event.key) !== -1) {
//         event.preventDefault(); // Prevent the default action (input)
//       }
//     }
  
//     const handleKeyPress = (event) => {
//       // Call the noDigits function to restrict input
//       noDigits(event);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (validate()) {
//         if (props.popupWindow === 'Reg') {
//           dispatch(addPerson({ name: formData.name, presence: formData.checkbox, company: formData.company, group: formData.select }));
//         } else if (props.popupWindow === 'Edit') {
//           dispatch(updatePerson({ index, updates: formData }));
//         }
//         props.setPopupWindow('');
//       } else {
//         console.log('Validation failed');
//       }
//     };
  
//     return (
//       <Box sx={overlay}>
//         <form onSubmit={handleSubmit}>
//           <Box color={"#FFFFF"} sx={popup}>
//             <Stack container>
//               <Stack direction="column" marginTop="66px">
//                 <Stack direction="row">
//                   <Stack direction="column" sx={{ position: "absolute", left: "416px" }} alignItems="flex-start">
//                     <Typography sx={fieldStyle}>ФИО</Typography>
//                     <Typography sx={fieldStyle}>Компания</Typography>
//                     <Typography sx={fieldStyle}>Группа</Typography>
//                     <Typography sx={fieldStyle}>Пристуствие</Typography>
//                   </Stack>
//                   {props.popupWindow === 'Reg' ? (
//                     <Registration
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                       handleKeyPress={handleKeyPress}
//                       errors={errors}
//                       handleCheckboxChange={handleCheckboxChange}
//                     />
//                   ) : props.popupWindow === 'Edit' ? (
//                     <Editing
//                       formData={formData}
//                       setFormData={setFormData}
//                       handleInputChange={handleInputChange}
//                       handleKeyPress={handleKeyPress}
//                       errors={errors}
//                       setErrors={setErrors}
//                       handleCheckboxChange={handleCheckboxChange}
//                     />
//                   ) : (
//                     ''
//                   )}
//                 </Stack>
//                 <Stack direction="row" sx={{ position: "absolute", left: "424px", top: "466px" }}>
//                   <ThemeProvider theme={theme}>
//                     {props.popupWindow === 'Reg' ? (
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{
//                           backgroundColor: "#4CAF50",
//                           boxShadow: "0 3px 3px 0 rgba(0, 0, 0, 0.16)",
//                           width: 273,
//                           height: 52,
//                           fontFamily: 'Roboto',
//                           fontWeight: 400,
//                           fontSize: "24px",
//                           textTransform: 'none',
//                           '&:hover': {
//                             backgroundColor: '#3E8C41', // Darker shade on hover
//                           },
//                           '&:active': {
//                             backgroundColor: '#245526', // Darker shade on click
//                           },
//                         }}
//                       >
//                         Добавить
//                       </Button>
//                     ) : props.popupWindow === 'Edit' ? (
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{
//                           backgroundColor: "#4CAF50",
//                           boxShadow: "0 3px 3px 0 rgba(0, 0, 0, 0.16)",
//                           width: 273,
//                           height: 52,
//                           fontFamily: 'Roboto',
//                           fontWeight: 400,
//                           fontSize: "24px",
//                           textTransform: 'none',
//                           '&:hover': {
//                             backgroundColor: '#3E8C41', // Darker shade on hover
//                           },
//                           '&:active': {
//                             backgroundColor: '#245526', // Darker shade on click
//                           },
//                         }}
//                       >
//                         Редактировать
//                       </Button>
//                     ) : (
//                       ''
//                     )}
//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: '#737373',
//                         boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.16)',
//                         width: 273,
//                         height: 52,
//                         fontFamily: 'Roboto',
//                         fontWeight: 400,
//                         fontSize: "24px",
//                         textTransform: 'none',
//                         '&:hover': {
//                           backgroundColor: '#616161', // Darker shade on hover
//                         },
//                         '&:active': {
//                           backgroundColor: '#4a4a4a', // Darker shade on click
//                         },
//                         marginLeft: "34px"
//                       }}
//                       onClick={() => props.setPopupWindow('')}
//                     >
//                       Закрыть
//                     </Button>
//                   </ThemeProvider>
//                 </Stack>
//               </Stack>
//             </Stack>
//           </Box>
//         </form>
//       </Box>
//     );
//   };
  
//   export default PopupWindow;