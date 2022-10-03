
import './App.css';
import Header from './component/Header';
import Home from './page-component/Home';
import AboutUs from './page-component/AboutUs';
import Buisness from './page-component/Buisness';
import Career from './page-component/Career';
import Product from './page-component/Product.jsx';
import ContactUs from './page-component/ContactUs';

import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/buisness' element={<Buisness/>} />
        <Route path='/product' element={<Product />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
