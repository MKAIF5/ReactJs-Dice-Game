import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Select from './components/Select'
import Dice from './components/Dice'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select' element={<Select />} />
        <Route path='/dice' element={<Dice />} />
      </Routes>
    </>
  )

}

export default App
