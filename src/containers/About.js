import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
        }}>
            <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
                Who are we?
            </Typography>
            <NavLink to="description" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>Description</NavLink>
            <NavLink to="services" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>Services</NavLink>
            <Outlet/>
        </Box>
    )
}

export default About;