import logo from './logo.svg';
import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Container } from 'react-bootstrap';
import Layout from './shared/Layout';
import Contactus from './pages/Contact Us/Contactus';
import About from './pages/About/About';
import Product from './pages/Products/Product';
import Pricing from './pages/Pricing/Pricing';


function App() {
  return (
    <Container>
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route path="home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contactus/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="product" element={<Product/>}/>

      </Route>
    </Routes>
   
    </Container>
 
  );
}

export default App;
