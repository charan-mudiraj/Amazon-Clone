import "./css/ProductsList.css";
import ProductCard from "../components/product_cards/ProductCard";
import { useState } from "react";
import { products, generateRandomArray } from "../ProductsMetaData";

const productsIds = generateRandomArray(10, 9);

function ScrollBtn(props) {
  const leftPath = "icons_&_logos/left.png";
  const rightPath = "icons_&_logos/right.png";
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
    if (scrollPosition < 1) {
      setScrollPosition(scrollPosition + 1);
    }
  }
  function Product(id) {
    const product = products[id];
    return <ProductCard content={product} />;
  }
  const plScrollStyle = {
    transform: "translate(" + -(scrollPosition * (218 + 18) * 5) + "px)",
    transition: "transform 0.7s",
  };
  return (
    <div id="productsListExpanded">
      <div id="productsListDiv">
        <div id="productsList" style={plScrollStyle}>
          {productsIds.map(Product)}
        </div>
      </div>
      <div id="pl_left_scrollBtn_div">
        <ScrollBtn direction="left" onClick={scrollLeft} />
      </div>
      <div id="pl_right_scrollBtn_div">
        <ScrollBtn direction="right" onClick={scrollRight} />
      </div>
    </div>
  );
}

export default ProductsList;
