
import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'atropos/css'

import NavbarTop from './components/navbarTop/NavbarTop';
import HomePage from './pages/HomePage/HomePage';
import Blogs from './pages/Blogs/Blogs';
import Podcast from './pages/Podcast/Podcast';
import Events from './pages/Events/Events';
import Contest from './pages/Contest/Contest';
import Gallery from './pages/Gallery/Gallery';
import Team from './pages/Team/Team';
import FAB from './components/FAB/FAB';
import Footer from './components/Footer/Footer';
import BlogView from './components/BlogView/BlogView';
import PeerToPeer from './pages/p2p/p2p';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Team23 from './pages/Team23/Team23';
import P2PDevs from './pages/P2PDev/P2pDev';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])

  return (
    <>
      <NavbarTop />
      
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/blog' element={<Blogs />}/>
        <Route path='/read/blog/:b' element={<BlogView />}/>
        <Route path='/podcast' element={<Podcast />}/>
        <Route path='/events' element={<Events />} />
        <Route path='/contest' element={<Contest />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/peer-to-peer' element={<PeerToPeer />}/>
        <Route path='/team-last' element={<Team23 />} />
        <Route path='/p2pxdev' element={<P2PDevs />} />
        <Route path='/*' element={<PageNotFound />}/>
      </Routes>

      <FAB />
      <Footer />
    </>
  )
}

export default App
