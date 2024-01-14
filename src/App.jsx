import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import SearchedProducts from "./pages/SearchedProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { RecoilRoot } from "recoil";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/searchedProducts" element={<SearchedProducts />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
