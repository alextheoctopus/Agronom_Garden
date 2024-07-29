import { Typography, Stack, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";

const ListOfPersons = () => {
    const persons = useSelector(state => state.persons)
    return (
        <Stack direction="column">
            <Stack direction="row" sx={{ position: 'absolute', top: '145px' }}>
                <Typography sx={{
                    position: 'absolute', left: '53px', color: '#4E3000', fontSize: 20,
                    fontFamily: "OpenSans, sans-serif", fontWeight: 600
                }}>Номер</Typography>
                <Typography sx={{
                    position: 'absolute', left: '270px', color: '#4E3000', fontSize: 20,
                    fontFamily: "OpenSans, sans-serif", fontWeight: 600
                }}>ФИО</Typography>
                <Typography sx={{
                    position: 'absolute', left: '780px', color: '#4E3000', fontSize: 20,
                    fontFamily: "OpenSans, sans-serif", fontWeight: 600
                }}>Компания</Typography>
                <Typography sx={{
                    position: 'absolute', left: '1181px', color: '#4E3000', fontSize: 20,
                    fontFamily: "OpenSans, sans-serif", fontWeight: 600
                }}>Группа</Typography>
                <Typography sx={{
                    position: 'absolute', left: '1839px', color: '#4E3000', fontSize: 20,
                    fontFamily: "OpenSans, sans-serif", fontWeight: 600
                }}>Присутствие</Typography>
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
                    {
                        persons.personsList.map((pers, index) => {
                            return (
                                <Button sx={{
                                    marginBottom: '70px',

                                }} key={index}>
                                    <Stack direction={'row'}><Typography sx={{
                                        position: 'absolute', left: '33px',
                                        color: '#000000',
                                        fontSize: 30,
                                        fontFamily: "OpenSans, sans-serif", fontWeight: 400
                                    }}>{index + 1}</Typography>
                                        <Typography sx={{
                                            position: 'absolute', left: '225px',
                                            fontSize: 30, width: '394px',
                                            fontFamily: "OpenSans, sans-serif", fontWeight: 400,
                                            whiteSpace: 'nowrap',   // Prevent text from wrapping to the next line
                                            overflow: 'hidden',     // Hide the overflowing text
                                            textOverflow: 'ellipsis',
                                            textAlign: 'left',
                                            color: '#000000',
                                            textTransform: 'none'
                                        }}>{pers.name}</Typography>
                                        <Typography sx={{
                                            position: 'absolute', left: '736px',
                                            fontSize: 30, width: '300px',
                                            fontFamily: "OpenSans, sans-serif", fontWeight: 400,
                                            whiteSpace: 'nowrap',   // Prevent text from wrapping to the next line
                                            overflow: 'hidden',     // Hide the overflowing text
                                            textOverflow: 'ellipsis',
                                            textAlign: 'left',
                                            color: '#000000',
                                            textTransform: 'none'
                                        }}>{pers.company}</Typography>
                                        <Typography sx={{
                                            position: 'absolute', left: '1138px',
                                            fontSize: 30, width: '300px',
                                            fontFamily: "OpenSans, sans-serif", fontWeight: 400,
                                            whiteSpace: 'nowrap',   // Prevent text from wrapping to the next line
                                            overflow: 'hidden',     // Hide the overflowing text
                                            textOverflow: 'ellipsis',
                                            textAlign: 'left',
                                            textTransform: 'none',
                                            color: '#000000'

                                        }}>{pers.group}</Typography>
                                        {pers.presence ? <Box sx={{
                                            position: 'absolute', top: 0, left: '1833px', height: '59px', width: '59px', backgroundColor: '#80BB00', borderRadius: '50%'
                                        }}></Box> :
                                            <Box sx={{ position: 'absolute', top: 0, left: '1833px', height: '59px', width: '59px', backgroundColor: '#EC5937', borderRadius: '50%' }}></Box>}
                                    </Stack>
                                </Button>
                            )
                        })
                    }
                </Stack>
            </Box>
        </Stack >
    );
}

export default ListOfPersons;