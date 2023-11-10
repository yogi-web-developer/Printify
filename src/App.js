
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navabar } from './Navabar';
import { Home } from './Home';
import Aboutus  from './Aboutus';
import  Products  from './Products';
import  Contact  from './Contact';
import  Cart  from './Cart';
import { useState } from 'react';


function App() {
  const [cart,setCart] = useState([])
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navabar/>}>
          <Route index element={<Home/>}>

          </Route>
          <Route path='/about' element={<Aboutus/>}>
            
          </Route>
          <Route path='/product' element={<Products cart={cart} setCart={setCart}></Products>}>
            
          </Route>
          <Route  path='/cart' element={<Cart cart={cart} setCart={setCart}></Cart>}>
            
          </Route>
          <Route  path='/contact' element={<Contact/>}>
            
          </Route>

        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>

  );

}

export default App;