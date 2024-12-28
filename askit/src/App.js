import React, { useState } from 'react';
import './App.css';
import Navbar1 from './Component/Navbar-test/Navbar-test';
import NavbarWithPopup from './Component/Navbar-test/test';


function App() {
  const [showA,setShowA] = useState(true)
  return (
    <div> 
      {showA?<Navbar1/>:<NavbarWithPopup/>}
      <button onClick={() => setShowA(!showA)}>
        Toggle Navbar
      </button>
    </div>
  );
}

export default App;
