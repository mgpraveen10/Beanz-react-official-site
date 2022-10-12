import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeanNavigation from "./components/beannavigation";
import Footer from "./components/footer";
import Homez from "./pages/Home";
import Shopcoffee from "./pages/Shopcoffee";
import Roasters from "./pages/Roasters";
import Barista from "./pages/Barista";
import Coffeelowdown from "./pages/Coffeelowdown";
import Ourstory from "./pages/Ourstory";
function App() {
  return (
    <BrowserRouter>
    <BeanNavigation/>
         
        <Routes>
          <Route path="/" element={<Homez />}/>
            <Route index element={<Homez />} />
            <Route path="ShopcofFee" element={<Shopcoffee />} />
             <Route path="Roasters" element={<Roasters />} />
             <Route path="Barista" element={<Barista />} />
             <Route path="Coffeelowdown" element={<Coffeelowdown />} />
             <Route path="Ourstory" element={<Ourstory />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
