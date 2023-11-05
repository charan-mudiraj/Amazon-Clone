import "./css/ProductsList.css";
import ProductCard from "../components/product_cards/ProductCard";
import { useState } from "react";

function ScrollBtn(props) {
  const leftPath = "products_images/left.png";
  const rightPath = "products_images/right.png";
  return (
    <button class="scrollBtn" id={props.direction} onClick={props.onClick}>
      <img src={props.direction == "left" ? leftPath : rightPath} />
    </button>
  );
}

function ProductsList() {
  const [scrollPosition, setScrollPosition] = useState(0);
  function scrollLeft() {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    }
  }
  function scrollRight() {
    setScrollPosition(scrollPosition + 1);
  }
  const plScrollStyle = {
    transform: "translate(" + -(scrollPosition * (218 + 24) * 5) + "px)",
    transition: "transform 0.7s",
  };
  return (
    <div id="productsListExpanded">
      <div id="productsListDiv">
        <div id="productsList" style={plScrollStyle}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <ScrollBtn direction="left" onClick={scrollLeft} />
      <ScrollBtn direction="right" onClick={scrollRight} />
    </div>
  );
}

export default ProductsList;
