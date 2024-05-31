import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/collections/collection-name' element={<ProductsPage/>} />
          <Route path='/collections/collection-name/product-name' element={<SingleProductPage/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
