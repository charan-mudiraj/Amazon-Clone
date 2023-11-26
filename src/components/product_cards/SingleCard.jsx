import "./css/SingleCard.css";

function SingleCard() {
  const imagePath = "other_images/sc.jpg";
  return (
    <div id="sc">
      <p id="sc_cardTitle">Up to 40% off | Deals on mobiles & accessories</p>
      <div class="sc_productImage">
        <img src={imagePath} alt="" id="sc_img" />
      </div>
      <a>see all offers</a>
    </div>
  );
}

export default SingleCard;
