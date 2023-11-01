import "./css/MultipleCard.css";
import products from "./products";

function MultipleCard() {
  function ProductDiv(imgProps) {
    return (
      <a href="">
        <div class="mc_productImage">
          <img src={imgProps.path} alt={imgProps.name} class="mc_img" />
        </div>
        <p class="mc_productTitle">{imgProps.name}</p>
      </a>
    );
  }
  return (
    <div id="mc">
      <p id="mc_cardTitle">Keep shopping for</p>
      <div id="mc_productsGrid">{products.map(ProductDiv)}</div>
      <a href="">View your browsing history</a>
    </div>
  );
}

export default MultipleCard;
