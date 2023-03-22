import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Index';

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          {/* <Route path="product" element={} /> */}
       </Routes>
    </BrowserRouter>

  )
}

export default App
