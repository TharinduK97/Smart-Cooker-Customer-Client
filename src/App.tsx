import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes >

          {/* <Route path="/inventory">
            <Route index element={<Inventory />} />
            <Route path=":number" element={<Inventoryview />} />
          </Route> */}
          <Route path="/"  element={<Mainpage />} />

        <Routes />
        </BrowserRouter>
    </div>
  )
}

export default App
