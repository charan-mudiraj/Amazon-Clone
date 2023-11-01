import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MultipleCard from "../components/product_cards/MultipleCard";
import SingleCard from "../components/product_cards/SingleCard";
import "./css/Home.css";

function BannerSlider() {
  const bannerPath = "other_images/banner1.jpg";
  const bannerStyle = {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 55%, #e6e6e6 90%), url(" +
      bannerPath +
      ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    top: 0,
    height: "100%",
  };
  return <div style={bannerStyle}></div>;
}

function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <BannerSlider />
      <MultipleCard />
      <SingleCard />
    </div>
  );
}

export default Home;
