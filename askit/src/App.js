import { useState } from 'react';
import './App.css';
import Navbar1 from './Component/Navbar-test/Navbar-test';
import Navbar from './Component/Navbar/navbar';

function App() {

  const [showA,setshowA] = useState(true);
  return (
    <div> 
      {showA?<Navbar/>:<Navbar1/>}
      <button onClick={()=>setshowA(!showA)}>Toggle</button>
    </div>
  );
}

export default App;
