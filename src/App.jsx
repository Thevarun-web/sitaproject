
import About from './About'
import Home from './Home'
import Contact from './Contact'
import System from './System'
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/system" element={<System/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
};

export default App
