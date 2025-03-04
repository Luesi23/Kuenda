import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router"

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element/>
          </Routes>
        </BrowserRouter>
     <h1>Hello</h1>
      </div>
      
   
  )
}

export default App
