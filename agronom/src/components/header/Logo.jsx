import logo from '../../assets/logo.png'
import { Box } from '@mui/material';
const Logo = () => {

    return (
        <Box
            component="img"
            sx={{
                position: 'absolute',
                top: "24px",
                left: "50px",
                height: "89.4px",
                width: "187.89px",
            }}
            alt="Company Logo"
            src={logo}
        />
    );
}

export default Logo;