import "./css/NavBar.css";

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

function NavBar() {
  const iconPath = "icons_&_logos/more.jpg";
  function NavigatorItem(item) {
    return (
      <a href={item.link} class="navLink">
        <div class="navItem">
          <p id={item.id}>{item.title}</p>
        </div>
      </a>
    );
  }
  return (
    <div id="navBar">
      <div id="allSlider">
        <img src={iconPath} alt="" id="moreIcon" />
        <p>
          <b>All</b>
        </p>
      </div>
      {navigatingItems.map(NavigatorItem)}
    </div>
  );
}

export default NavBar;
