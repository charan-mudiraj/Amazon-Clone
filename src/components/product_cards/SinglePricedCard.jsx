import "./css/SinglePricedCard.css";

function SinglePricedCard() {
  const imagePath = "products_images/7.jpg";
  return (
    <div id="spc">
      <a href="">
        <div class="spc_productImage">
          <img src={imagePath} alt="" id="spc_img" />
        </div>
        <div id="spc_price">
          <div id="spc_rs">
            <p id="spc_rs_symbol">₹</p>
            <p id="spc_rs_value">79.00</p>
          </div>
          <div id="spc_mrp">
            <p id="spc_mrp_text">M.R.P.: </p>
            <p id="spc_mrp_value">₹249.00</p>
          </div>
        </div>
        <p id="spc_product_title">Clazkit Plastic Kitchen Dori Handy Veg...</p>
      </a>
    </div>
  );
}

export default SinglePricedCard;
