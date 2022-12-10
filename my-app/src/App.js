import React from "react";
import "./Styles.css"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Service"
import Contact from "./routes/Contact"
import {Routes,Route} from "react-router-dom"

function App() {
  return( 
  <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Navbar/>

  </div>
  );
}

export default App;
