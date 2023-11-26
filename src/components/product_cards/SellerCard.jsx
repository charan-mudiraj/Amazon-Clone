import "./css/SellerCard.css";

function SellerCard() {
  const imgPath = "other_images/seller_card.jpg";
  return (
    <div id="seller-card">
      <div id="seller-c-text">
        <p>Become an Amazon Seller</p>
        <a>Become a Seller</a>
      </div>
      <img src={imgPath} alt="" />
    </div>
  );
}

export default SellerCard;
