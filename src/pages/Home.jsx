import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MultipleCard from "../components/product_cards/MultipleCard";
import SingleCard from "../components/product_cards/SingleCard";
import SingleExpandedCard from "../components/product_cards/SingleExpandedCard";
import SinglePricedCard from "../components/product_cards/SinglePricedCard";
import ProductCard from "../components/product_cards/ProductCard";
import ProductsList from "../components/ProductsList";
import "./css/Home.css";
import { useState } from "react";

function BannerImage() {
  const bannerPath = "other_images/banner1.jpg";
  return <img src={bannerPath} alt="banner" class="banner-image" />;
}
function BannerBtn(props) {
  const leftArrow = "<";
  const rightArrow = ">";
  return (
    <button class="banner-btn" id={props.direction} onClick={props.onClick}>
      <p>{props.direction == "left" ? leftArrow : rightArrow}</p>
    </button>
  );
}
function BannerSlider() {
  // const bannerStyle = {
  //   background:
  //     "linear-gradient(to bottom, rgba(0, 0, 0, 0) 55%, #e6e6e6 90%), url(" +
  //     bannerPath +
  //     ")",
  //   backgroundRepeat: "no-repeat",
  //   position: "relative",
  //   backgroundSize: "cover",
  //   top: 0,
  //   height: "100%",
  // };
  const [scrollPosition, setScrollPosition] = useState(0);
  const bannerTransitionStyle = {
    transition: "transform 0.5s",
    transform: "translate(" + -(scrollPosition * 100) + "%)",
  };
  function scrollLeft() {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    }
  }
  function scrollRight() {
    setScrollPosition(scrollPosition + 1);
  }
  return (
    <div id="banner-slider">
      <div id="banner-flex" style={bannerTransitionStyle}>
        <BannerImage />
        <BannerImage />
        <BannerImage />
      </div>
      <div id="banner-gradient"></div>
      <BannerBtn direction="left" onClick={scrollLeft} />
      <BannerBtn direction="right" onClick={scrollRight} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <BannerSlider />
      <MultipleCard />
      <SingleCard />
      <SingleExpandedCard />
      <SinglePricedCard />
      <ProductsList />
    </div>
  );
}

export default Home;
