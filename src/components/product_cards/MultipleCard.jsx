import "./css/MultipleCard.css";
import { products, generateRandomArray } from "../../ProductsMetaData";

const products_path = "products_images/";
const productsIds = generateRandomArray(4, 9);

function MultipleCard() {
  function ProductDiv(id) {
    let product = products[id];
    return (
      <a href={"/product-id=" + product.id}>
        <div class="mc_productImage">
          <img
            src={products_path + id + "/1.jpg"}
            alt={product.name}
            class="mc_img"
          />
        </div>
        <p class="mc_productTitle">{product.name}</p>
      </a>
    );
  }
  return (
    <div id="mc">
      <p id="mc_cardTitle">Keep shopping for</p>
      <div id="mc_productsGrid">{productsIds.map(ProductDiv)}</div>
      <a>View your browsing history</a>
    </div>
  );
}

export default MultipleCard;
