import Footer from "../components/Footer";
import ProductCard from "../components/product_cards/ProductCard";
import { products } from "../ProductsMetaData";
import { useEffect, useState } from "react";
import "./css/SearchedProducts.css";
import { useRecoilValue } from "recoil";
import { queryAtom } from "../components/query-atom";
import NavBar from "../components/NavBar";

export default function SearchedProducts() {
  const queryAtomValue = useRecoilValue(queryAtom);
  const [category, text, maxPrice] = [
    queryAtomValue.category,
    queryAtomValue.text,
    queryAtomValue.maxPrice,
  ];
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
      return title.includes(text.toLowerCase());
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
  }, [category, text, maxPrice]);
  return (
    <div id="searched-products">
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
          {searchResults.map((product, index) => (
            <ProductBox content={product} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
