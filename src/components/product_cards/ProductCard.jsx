import "./css/ProductCard.css";

function ProductCard() {
  const imagePath = "products_images/8.jpg";
  return (
    <a href="" id="pc_link">
      <div id="pc">
        <button class="pc_product_image">
          <img src={imagePath} alt="" id="pc_img" />
        </button>
        <p id="pc_product_title">
          Acer Predator Helios 16 Gaming Laptop 13th Gen Intel Core i9 (Windows
          11 Home...
        </p>
        <div id="pc_rating">
          <p>★★★★✰</p>
        </div>
        <div id="pc_price">
          <p id="pc_rs_value">₹1,80,990.00</p>
          <div id="pc_mrp">
            <p id="pc_mrp_text">M.R.P.: </p>
            <p id="pc_mrp_value">₹2,07,999.00</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
