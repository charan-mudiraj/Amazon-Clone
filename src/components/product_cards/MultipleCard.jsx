import "./css/MultipleCard.css";
import products from "./products";

function MultipleCard() {
  function ProductDiv(imgProps) {
    return (
      <a href="">
        <div class="productImage">
          <img src={imgProps.path} alt={imgProps.name} />
        </div>
        <p class="productTitle">{imgProps.name}</p>
      </a>
    );
  }
  return (
    <div id="multipleCard">
      <p id="cardTitle">Keep shopping for</p>
      <div id="productsGrid">{products.map(ProductDiv)}</div>
      <a href="">View your browsing history</a>
    </div>
  );
}

export default MultipleCard;
