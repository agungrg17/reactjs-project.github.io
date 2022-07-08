import themes from './themes/themes.js';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import {ThemeProvider, Box} from '@mui/material';
import MovieList from './containers/MovieList.js';
import { Route, Routes, Link } from 'react-router-dom';
import About from './containers/About.js';
import Pricing from './containers/Pricing.js';
import Subscribed from './containers/Subscribed';
import './App.css';

function App() {
  return (
    // Gunakan ThemeProvider di sini
    // Inject Context Theme di sini
    <ThemeProvider theme={themes}>
      <div className="App">
        <ResponsiveNavbar ></ResponsiveNavbar>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<About />}>
            <Route 
              path="description" 
              element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
            <Route 
              path="services" 
              element={<Box sx={{ mt: 10 }}>Streaming movies, Indonesian film, and film review.</Box>} />
          </Route>
          <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="subscribed/:plan" element={<Subscribed />} />
          <Route
            path="*"
            element={
              <Box sx={{
                display: 'flex', 
                margin: 10, 
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column',
              }}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
                  alt="404"
                />
                <p>You have reach the edge of universe</p>
                <Link to="/">Take me home!</Link>
              </Box>
            }
          />
        </Routes>
        
        {/* <section style={{ paddingLeft: 16, paddingRight: 16 }}>
          <MovieList />
        </section> */}
      </div>

      {/* Jangan lupa ditutup */}
    </ThemeProvider>
  );
}

export default App;
 