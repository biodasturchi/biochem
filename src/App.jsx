import './App.css'
import { Home, Research, Blog, Team, Contact } from './pages'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/research' element={<Research />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
