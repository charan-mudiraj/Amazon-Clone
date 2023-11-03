import "./css/ProductsList.css";
import ProductCard from "../components/product_cards/ProductCard";

function ProductsList() {
  function ScrollBtn(props) {
    const leftPath = "products_images/left.png";
    const rightPath = "products_images/right.png";
    return (
      <button class="scrollBtn" id={props.direction}>
        <img src={props.direction == "left" ? leftPath : rightPath} />
      </button>
    );
  }
  return (
    <div id="productsListDiv">
      <ScrollBtn direction="left" />
      <div id="productsList">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ScrollBtn direction="right" />
    </div>
  );
}

export default ProductsList;
