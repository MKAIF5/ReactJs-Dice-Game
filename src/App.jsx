import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Select from './components/Select'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select' element={<Select />} />
      </Routes>
    </>
  )

}

export default App
