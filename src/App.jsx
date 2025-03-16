import './App.css';
import '../src/components/Media.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Mobile from './components/Mobile';
import Watch from './components/Watch';
import Laptop from './components/Laptop';
import Fashion from './components/Fashion';
import Shoes from './components/Shoes';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import Order from './components/Order';
import Buy from './components/Buy';
import Product from './components/Product';
import { useState } from 'react';

function App() {
  const [product, setProduct] = useState(null)
  return (
    <Routes>
      {/* Parent Layout Route */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home setProduct={setProduct} />} />

      </Route>

      {/* Other Routes (outside Layout) */}
      <Route path='/order' element={<Order product={product} />} />
      <Route path='/buy' element={<Buy product={product} />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/product' element={<Product />} />
    </Routes>
  );
}

export default App;


        {/* <Route path="mobile" element={<Mobile setProduct={setProduct} />} />
        <Route path="watch" element={<Watch setProduct={setProduct} />} />
        <Route path="laptop" element={<Laptop setProduct={setProduct} />} />
        <Route path="fashion" element={<Fashion setProduct={setProduct} />} />
        <Route path="shoes" element={<Shoes setProduct={setProduct} />} /> */}