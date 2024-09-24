
import './App.css'
import Menu from './Components/nav/Menu'
import İnfoHead from './Components/info-head/İnfo'
import İletisim from './Components/pages/iletişim/İletişim'
import Hizmleter from './Components/pages/hizmetler/Hizmetler'
import Blog from './Components/pages/blog/Blog'
import Hakkımızda from './Components/pages/hakkımızda/Hakkımızda'
import Katalog from './Components/pages/katalog/Katalog'
import NotFound from './Components/notfound/NotFound'
import Home from './Components/anasayfa/Home'
import BlogDetail from './Components/pages/blog/BlogDetail'
import { Routes, Route } from 'react-router-dom'
import UpButton from './Components/anasayfa/upbutton/UpButton'
import { useEffect } from 'react'
import Footer from './Components/footer/Footer'




function App() {



  return (
    <>
      <İnfoHead />

      {/* telefon mail watsapp iletişim */}


      <nav>

        <Menu />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/katalog' element={<Katalog />}> </Route>
          <Route path='blog/:id' element={<BlogDetail />}></Route>
          <Route path='/İletisim' element={<İletisim />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/hizmetler' element={<Hizmleter />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/hakkımızda' element={<Hakkımızda />}></Route>
        </Routes>

      </nav >
      {/* Ansayfa,İletişim Vb Menü*/}

      <UpButton />





    </>
  )
}

export default App
