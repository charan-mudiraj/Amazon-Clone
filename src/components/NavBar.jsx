import "./css/NavBar.css";
import { useState } from "react";

const navigatingItems = [
  { id: 1, title: "Fresh", link: "" },
  { id: 2, title: "Amazon miniTV", link: "" },
  { id: 3, title: "Sell", link: "" },
  { id: 4, title: "Gift Cards", link: "" },
  { id: 5, title: "Buy Again", link: "" },
  { id: 6, title: "Coupons", link: "" },
  { id: 7, title: "Amazon Basics", link: "" },
  { id: 8, title: "Grocery & Gourment", link: "" },
  { id: 9, title: "Health", link: "" },
  { id: 10, title: "Household", link: "" },
  { id: 11, title: "Personal Care", link: "" },
];

function SliderDiv(props) {
  const userIconPath = "icons_&_logos/user.png";
  const transitionStyle = {
    transition: "transform 0.37s",
    transform: props.isOpen ? "translate(0px)" : "translate(-368px)",
  };
  const sliderContents = [
    {
      title: "Trending",
      items: ["Best Sellers", "New Releases", "Movers and Shakers"],
    },
    {
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
      title: "Programs & Features",
      items: ["Amazon Launchpad", "Handloom and Handicrafts", "See All"],
    },
    {
      title: "Help & Settings",
      items: ["Your Account", "Customer Service", "Sign Out"],
    },
  ];
  function SliderContent(content) {
    return (
      <div class="nb-slider-content">
        <p class="nb-slider-content-title">{content.title}</p>
        {content.items.map((item) => (
          <p class="nb-slider-content-item">{item}</p>
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
          <p>Hello, Charan</p>
        </div>
        <div id="nb-slider-contents">{sliderContents.map(SliderContent)}</div>
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
    <button id="allSlider" onClick={props.toggle}>
      <img src={moreIconPath} alt="" id="moreIcon" />
      <p>
        <b>All</b>
      </p>
    </button>
  );
}
function NavigatorItem(item) {
  return (
    <a class="navLink">
      <div class="navItem">
        <p id={item.id}>{item.title}</p>
      </div>
    </a>
  );
}
function NavBar() {
  const body = document.body;
  const [isOpen, setIsOpen] = useState(false);
  function slideToggle() {
    if (isOpen) {
      setIsOpen(false);
      body.style.overflow = "auto";
    } else {
      setIsOpen(true);
      body.style.overflow = "hidden";
    }
  }
  return (
    <div id="navBar">
      <SliderDiv isOpen={isOpen} toggle={slideToggle} />
      <AllSlider toggle={slideToggle} />
      {navigatingItems.map(NavigatorItem)}
    </div>
  );
}

export default NavBar;
