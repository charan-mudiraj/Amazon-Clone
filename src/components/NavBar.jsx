import "./css/NavBar.css";
import { useState } from "react";
import { productsCategories } from "../ProductsMetaData";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { queryAtom } from "./query-atom";

const navigatingItems = productsCategories;

function SliderDiv(props) {
  const userIconPath = "icons_&_logos/user.png";
  const transitionStyle = {
    transition: "transform 0.37s",
    transform: props.isOpen ? "translate(0px)" : "translate(-368px)",
  };
  const sliderContents = [
    {
      id: 1,
      title: "Trending",
      items: ["Best Sellers", "New Releases", "Movers and Shakers"],
    },
    {
      id: 2,
      title: "Digital Content And Devices",
      items: [
        "Echo & Alexa",
        "Fire TV",
        "Kindle E-Readers & eBooks",
        "Audible Audiobooks",
        "Amazon Prime Video",
        "Amazon Prime Music",
      ],
    },
    {
      id: 3,
      title: "Shop By Category",
      items: [
        "Mobiles, Computers",
        "TV, Applications, Electronics",
        "Men's Fashion",
        "Women's Fashion",
        "See All",
      ],
    },
    {
      id: 4,
      title: "Programs & Features",
      items: ["Amazon Launchpad", "Handloom and Handicrafts", "See All"],
    },
    {
      id: 5,
      title: "Help & Settings",
      items: ["Your Account", "Customer Service", "Sign Out"],
    },
  ];
  function SliderContent({ content }) {
    return (
      <div className="nb-slider-content">
        <p className="nb-slider-content-title">{content.title}</p>
        {content.items.map((item, index) => (
          <p className="nb-slider-content-item" key={index}>
            {item}
          </p>
        ))}
        <hr />
      </div>
    );
  }
  return (
    <div>
      <div id="nb-sliderDiv" style={transitionStyle}>
        <div id="nb-sliderDiv-user">
          <img src={userIconPath} alt="user" />
          <p>Hello, User</p>
        </div>
        <div id="nb-slider-contents">
          {sliderContents.map((content) => (
            <SliderContent content={content} key={content.id} />
          ))}
        </div>
      </div>
      <button
        id="nb-sliderDiv-closeBtn"
        onClick={props.toggle}
        style={
          props.isOpen ? { visibility: "visible" } : { visibility: "hidden" }
        }
      >
        X
      </button>
      <button
        id="nb-sliderDiv-background"
        onClick={props.toggle}
        style={
          props.isOpen ? { visibility: "visible" } : { visibility: "hidden" }
        }
      ></button>
    </div>
  );
}
function AllSlider(props) {
  const moreIconPath = "icons_&_logos/more.jpg";
  return (
    <div id="allSlider" onClick={props.toggle}>
      <img src={moreIconPath} alt="" id="moreIcon" />
      <p>
        <b>All</b>
      </p>
    </div>
  );
}
function NavigatorItem({ item, onClick }) {
  return (
    <a className="navLink" onClick={onClick}>
      <div className="navItem">
        <p id={item.id}>{item.name}</p>
      </div>
    </a>
  );
}
function NavBar() {
  const body = document.body;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const setQueryAtom = useSetRecoilState(queryAtom);
  function slideToggle() {
    if (isOpen) {
      setIsOpen(false);
      body.style.overflow = "auto";
    } else {
      setIsOpen(true);
      body.style.overflow = "hidden";
    }
  }
  function searchByCategory(category) {
    setQueryAtom({
      category: category,
      text: "",
      maxPrice: 200000,
    });
    navigate("/searchedProducts");
  }
  return (
    <div id="navBar">
      <SliderDiv isOpen={isOpen} toggle={slideToggle} />
      <AllSlider toggle={slideToggle} />
      {navigatingItems.map((item) => (
        <NavigatorItem
          item={item}
          key={item.id}
          onClick={() => searchByCategory(item.name)}
        />
      ))}
    </div>
  );
}

export default NavBar;
