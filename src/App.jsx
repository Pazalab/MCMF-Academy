
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Academy from './pages/Academy'

function App() {

  return (
    <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/academy' element={<Academy />} />
    </Routes>
  )
}

export default App
