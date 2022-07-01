import themes from './themes/themes.js';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import {ThemeProvider} from '@mui/material';
import MovieList from './containers/MovieList.js';

function App() {
  return (
    // Gunakan ThemeProvider di sini
    // Inject Context Theme di sini
    <ThemeProvider theme={themes}>
      <div className="App">
        <ResponsiveNavbar ></ResponsiveNavbar>
        <section style={{ paddingLeft: 16, paddingRight: 16 }}>
          <MovieList />
        </section>
      </div>

      {/* Jangan lupa ditutup */}
    </ThemeProvider>
  );
}

export default App;
 