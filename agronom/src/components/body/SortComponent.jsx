import { Typography, Stack, Button,Box } from "@mui/material";
const SortComponent = (props) => {
    let sortFieldStyle = {
        position: 'absolute',
        fontStyle: 'Open Sans',
        fontSize: '25px',
        fontWeight: 400,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#C4C4C4'
        }
    }
    let nonSortStyle = {
        left: '905px',
        backgroundColor: props.sort === 'none' ? '#C4C4C4' : 'white',
        color: props.sort === 'none' ? 'white' : '#4E3000'
    };
    let presentSortStyle = {
        left: '626px',
        backgroundColor: props.sort === true ? '#C4C4C4' : 'white',
        color: props.sort === true ? 'white' : '#4E3000'
    };
    let absentSortStyle = {
        left: '390px',
        backgroundColor: !props.sort ? '#C4C4C4' : 'white',
        color: !props.sort ? 'white' : '#4E3000'
    };
    let textStyle = { position: "absolute", left: "50px", fontStyle: 'Open Sans', fontSize: "30px", fontWeight: 700, color: '#4E3000' }

    return (
        <Box  sx={{ position: 'fixed', bottom: '0%', height: '102px', width: '100%',backgroundColor:"white",zIndex:1000 }}>
            <Stack direction="row">
                <Typography sx={textStyle}>Фильтровать по:</Typography>
                <Button onClick={() => props.setSort(false)} sx={{ ...sortFieldStyle, ...absentSortStyle }}>Отсутствующим</Button>
                <Button onClick={() => props.setSort(true)} sx={{ ...sortFieldStyle, ...presentSortStyle }}>Присутствующим</Button>
                <Button onClick={() => props.setSort('none')} sx={{ ...sortFieldStyle, ...nonSortStyle }}>Без фильтра</Button>
            </Stack>
            </Box>);
}

export default SortComponent;