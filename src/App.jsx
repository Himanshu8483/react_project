import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Deal from './components/Deal'
import TopPick from './components/TopPick'
import BannerCarousel from './components/Banner'
import Fashion from './components/Fashion'



function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <BannerCarousel/>
     <Deal/>
     <TopPick/>
     <Fashion/>
     <Footer/>
    </>
  )
}

export default App
