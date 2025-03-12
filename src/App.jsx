import './App.css'
import '../src/components/Media.css'
import Home from './components/Home'
import { Route , Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Deal from './components/Deal'
import Mobile from './components/Mobile'
import Watch from './components/Watch'
import Laptop from './components/Laptop'
import Fashion from './components/Fashion'
import Shoes from './components/Shoes'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
     <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>

          <Route path="Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>

        </Route>
    </Routes>
    </>
  )
}

export default App


{/* <Route path="/Deal" element={<Deal/>}/>
<Route path="/mobile" element={<Mobile />} />
<Route path="/Watch" element={<Watch />} />
<Route path="/Laptop" element={<Laptop />} />
<Route path="/Fashion" element={<Fashion />} />
<Route path="/Shoes" element={<Shoes />} /> */}