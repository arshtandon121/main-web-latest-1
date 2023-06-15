// import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Services from './screens/Services';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
   
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
