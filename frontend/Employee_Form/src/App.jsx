import './App.css'
import AddEmployee from './Component/AddEmployee'
import Home from "./Component/Home"
import ListEmployee from './Component/ListEmployee'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/listEmployee" element={<ListEmployee/>}/>
      </Routes>
    </Router>
  )
}

export default App
