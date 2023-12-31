import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:movie' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
