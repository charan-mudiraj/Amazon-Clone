import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/product_cards/ProductCard";
import { products } from "../ProductsMetaData";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/SearchedProducts.css";

export default function SearchedProducts() {
  const state = useLocation().state;
  let category, text, maxPrice;
  if (state) {
    category = state.category;
    text = state.text.toLowerCase();
    maxPrice = state.maxPrice;
  } else {
    category = "All";
    text = "";
    maxPrice = 200000;
  }
  const [searchResults, setSearchResults] = useState([]);
  function ProductBox(props) {
    return (
      <div className="product-box">
        <ProductCard content={props.content} />
      </div>
    );
  }
  useEffect(() => {
    const parsePrice = (price) => {
      return parseInt(price.replace(/,/g, ""));
    };
    const isMatching = (title, text) => {
      title = title.toLowerCase();
      return title.includes(text);
    };
    let results = [];
    if (category === "All") {
      results = products.filter((product) => {
        return (
          parsePrice(product.price) <= maxPrice &&
          isMatching(product.title, text)
        );
      });
    } else {
      results = products.filter((product) => {
        return (
          product.category === category &&
          parsePrice(product.price) <= maxPrice &&
          isMatching(product.title, text)
        );
      });
    }
    setSearchResults(results);
  }, []);
  return (
    <div id="searched-products">
      <Header />
      <NavBar />
      <div id="sp-content">
        <div id="results-band">
          <p>
            {" "}
            {searchResults.length} Results for <span>"{text}"</span>, on{" "}
            <span>"{category}"</span> Category, Under{" "}
            <span>
              "₹
              {maxPrice}"
            </span>
          </p>
        </div>
        <div id="sp-list">
          {searchResults.map((product) => (
            <ProductBox content={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
