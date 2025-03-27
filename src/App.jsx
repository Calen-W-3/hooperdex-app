import TeamList from './routes/map/TeamList.component';
import AboutPage from './routes/home/about-page.component';
import Navbar from './routes/navigation/navbar.component';

import { Routes, Route } from 'react-router';


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<AboutPage />} />
        <Route path='/map' element={<TeamList />} />
      </Route>
    </Routes>
  )

}

export default App
