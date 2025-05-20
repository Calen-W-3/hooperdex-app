import TeamList from './routes/map/TeamList.component';
import AboutPage from './routes/home/about-page.component';
import Navbar from './routes/navigation/navbar.component';
import { ThemeProvider } from '@mui/material';
import './index.css'

import { Routes, Route } from 'react-router';
import theme from './theme';
import NewsFeed from './routes/news-feed/news-feed.component';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<AboutPage />} />
          <Route path='/map' element={<TeamList />} />
          <Route path='/news-feed' element={<NewsFeed />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )

}

export default App
