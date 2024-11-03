import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './Products/Products';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar/Navbar';
import ProductDetailedPage from './ProductDetailedPage/ProductDetailedPage';
import Cart from './Cart/Cart';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/products" element={<Products/>}/>
      <Route path="/product-detailes/:productId" element={<ProductDetailedPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </div>
  );
}

export default App;
