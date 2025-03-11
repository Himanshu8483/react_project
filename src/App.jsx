import './App.css'
import Home from './components/Home'
import { Route , Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Deal from './components/Deal'
import Mobile from './components/Mobile'
import Watch from './components/Watch'
import Laptop from './components/Laptop'
import Fashion from './components/Fashion'
import Shoes from './components/Shoes'

function App() {

  return (
    <>

     <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Deal" element={<Deal/>}/>
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Laptop" element={<Laptop />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Shoes" element={<Shoes />} />

        </Route>
    </Routes>
    </>
  )
}

export default App
