import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Game from './components/Game'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  )

}

export default App
