import "./css/ProductCard.css";

function ProductCard(props) {
  const product = props.content;
  const imagePath = "products_images/" + product.id + "/1.jpg";
  function titleShortener(longTitle) {
    let shortTitle = longTitle.substring(0, 50) + "...";
    return shortTitle;
  }
  return (
    <a href={"/product-id=" + product.id} id="pc_link">
      <div id="pc">
        <button class="pc_product_image">
          <img src={imagePath} alt={product.name} id="pc_img" />
        </button>
        <p id="pc_product_title">{titleShortener(product.title)}</p>
        <div id="pc_rating">
          <p>{product.rating}</p>
        </div>
        <div id="pc_price">
          <p id="pc_rs_value">{"₹" + product.price}</p>
          <div id="pc_mrp">
            <p id="pc_mrp_text">M.R.P.: </p>
            <p id="pc_mrp_value">{"₹" + product.mrp}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
