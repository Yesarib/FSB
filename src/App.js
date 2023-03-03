import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Router>
        <div style={{backgroundColor:'#6096B4', width:'auto', height:'15px'}} />
        <Topbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
