import "./css/SingleExpandedCard.css";

function SingleExpandedCard() {
  const imagePath = "products_images/6.jpg";
  return (
    <div id="sec">
      <a href="">
        <div class="sec_productImage">
          <img src={imagePath} alt="" id="sec_img" />
        </div>
      </a>
    </div>
  );
}

export default SingleExpandedCard;
