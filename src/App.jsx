import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-id=0" element={<Product id={0} />} />
        <Route path="/product-id=1" element={<Product id={1} />} />
        <Route path="/product-id=2" element={<Product id={2} />} />
        <Route path="/product-id=3" element={<Product id={3} />} />
        <Route path="/product-id=4" element={<Product id={4} />} />
        <Route path="/product-id=5" element={<Product id={5} />} />
        <Route path="/product-id=6" element={<Product id={6} />} />
        <Route path="/product-id=7" element={<Product id={7} />} />
        <Route path="/product-id=8" element={<Product id={8} />} />
        <Route path="/product-id=9" element={<Product id={9} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
