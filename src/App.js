import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Topbar from './component/Topbar/Topbar';

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
