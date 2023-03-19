import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Form from './components/Form'
import App1 from "./app1"
 function Helo() {
  return (
    <div>
    
    <Router>
    <Routes>
      <Route path="/" element={<App1/>}></Route>
      <Route path="/Home" element={<Form/>}></Route>
    </Routes>
    </Router>
    </div>
  )
}
export default Helo;