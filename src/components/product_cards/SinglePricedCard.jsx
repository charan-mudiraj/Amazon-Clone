import "./css/SinglePricedCard.css";
import { products, generateRandomArray } from "../../ProductsMetaData";

const products_path = "products_images/";
const productId = generateRandomArray(1, 9)[0];

function SinglePricedCard() {
  const imagePath = products_path + productId + "/1.jpg";
  const product = products[productId];
  function titleShortener(longTitle) {
    let shortTitle = longTitle.substring(0, 50) + "...";
    return shortTitle;
  }
  return (
    <div id="spc">
      <a href={"/product-id=" + productId}>
        <div class="spc_productImage">
          <img src={imagePath} alt="" id="spc_img" />
        </div>
        <div id="spc_price">
          <div id="spc_rs">
            <p id="spc_rs_symbol">₹</p>
            <p id="spc_rs_value">{product.price}</p>
          </div>
          <div id="spc_mrp">
            <p id="spc_mrp_text">M.R.P.: </p>
            <p id="spc_mrp_value">{"₹" + product.mrp}</p>
          </div>
        </div>
        <p id="spc_product_title">{titleShortener(product.title)}</p>
      </a>
    </div>
  );
}

export default SinglePricedCard;
