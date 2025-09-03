
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Academy from './pages/Academy'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import Programs from './pages/Programs'

function App() {
  const location = useLocation();

  useEffect(() => {
       window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/academy' element={<Academy />} />
             <Route path='/mcmf-programs-and-activities' element={<Programs />} />
             <Route path='/contact-us' element={<Contact />} />
    </Routes>
  )
}

export default App
