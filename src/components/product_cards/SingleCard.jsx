import "./css/SingleCard.css";

function SingleCard() {
  const imagePath = "products_images/5.jpg";
  return (
    <div id="sc">
      <p id="sc_cardTitle">Up to 40% off | Deals on mobiles & accessories</p>
      <a href="">
        <div class="sc_productImage">
          <img src={imagePath} alt="" id="sc_img" />
        </div>
      </a>
      <a href="">see all offers</a>
    </div>
  );
}

export default SingleCard;
