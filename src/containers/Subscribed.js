import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Subscribed = () => {
    let params = useParams();
    
    return (
        <Box x={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
        }}>
            <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
                Thank you for subscribing! <br/>
                Your plan now: {params?.plan} <br/><br/>
            </Typography>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>Back To Home</NavLink>
        </Box>
    );
}

export default Subscribed;