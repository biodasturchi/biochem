import './App.css'
import { Home } from './pages'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
