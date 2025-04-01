import TeamList from './routes/map/TeamList.component';
import AboutPage from './routes/home/about-page.component';
import Navbar from './routes/navigation/navbar.component';
import { ThemeProvider } from '@mui/material';

import { Routes, Route } from 'react-router';
import theme from './theme';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<AboutPage />} />
          <Route path='/map' element={<TeamList />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )

}

export default App
