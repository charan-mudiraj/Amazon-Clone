import "./css/SingleExpandedCard.css";

function SingleExpandedCard() {
  const imagePath = "other_images/sec.jpg";
  return (
    <div id="sec">
      <a>
        <div class="sec_productImage">
          <img src={imagePath} alt="" id="sec_img" />
        </div>
      </a>
    </div>
  );
}

export default SingleExpandedCard;
