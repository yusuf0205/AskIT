import React from 'react';
import './App.css';
import Card from './Component/Card/card';
import data from './Component/Card/data.json'; 
{/*import NavbarWithPopup from './Component/Navbar-test/test';*/}


function App() {
  return (
    <div> 
      {/*<NavbarWithPopup /> */}
      <Card data={data} />
    </div>
  );
}

export default App;
