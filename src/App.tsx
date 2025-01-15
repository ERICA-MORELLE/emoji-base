import React from 'react'
import  {BrowserRouter , Route, Routes} from "react-router-dom"
import Home from './Home'
import Comment from './Comment'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/comment" element={<Comment/>} />
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
