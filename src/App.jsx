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
import Orders from './components/Orders';

function App() {
  // const [product, setProduct] = useState(null) 
  const name = parseInt(localStorage.getItem("userData.name")) ; // Example name from localStorage
  return (
    <Routes>
      {/* Parent Layout Route */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home  />} />
        <Route path="mobile" element={<Mobile  />} />
        <Route path="watch" element={<Watch  />} />
        <Route path="laptop" element={<Laptop  />} />
        <Route path="fashion" element={<Fashion  />} />
        {/* <Route path="fashion" element={<Fashion setProduct={setProduct} />} /> */}
        <Route path="shoes" element={<Shoes  />} />
      </Route>

      {/* Other Routes (outside Layout) */}
      <Route path='/order' element={<Order />} />
      <Route path='/buy' element={<Buy />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/orders" element={<Orders />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;

// ================