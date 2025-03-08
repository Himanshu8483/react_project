import './App.css'
import Home from './components/Home'
import { Route , Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Deal from './components/Deal'

function App() {

  return (
    <>

     <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Deal" element={<Deal/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
