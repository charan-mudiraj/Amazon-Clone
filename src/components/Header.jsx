import "./css/Header.css";
import { products, productsCategories } from "../ProductsMetaData";
import { useNavigate } from "react-router-dom";

function Logo() {
  let iconPath = "icons_&_logos/logo.png";
  return (
    <a href="/" id="logoDiv">
      <div id="logo" class="component">
        <img src={iconPath} alt="Amazon Logo" id="logoImage" />
        <p id="in">.in</p>
      </div>
    </a>
  );
}
function SearchBar() {
  const navigate = useNavigate();
  let iconPath = "icons_&_logos/search.png";
  function SearchFilterOption(category) {
    return <option>{category.name}</option>;
  }
  function searchRequest() {
    const category = document.getElementById("searchFilter").value;
    const text = document.getElementById("searchBar").value;
    const maxPrice = document.getElementById("priceFilter").value;
    navigate("/searchedProducts", {
      state: { category: category, text: text, maxPrice: maxPrice },
    });
    window.location.reload();
  }
  function CategorySelector() {
    return (
      <select id="searchFilter" class="searchBarComponent">
        <option>All</option>
        {productsCategories.map(SearchFilterOption)}
      </select>
    );
  }
  function PriceRangeSelector() {
    const priceRanges = [200000, 100000, 50000, 25000, 10000, 5000];
    return (
      <select id="priceFilter" class="searchBarComponent">
        {priceRanges.map((price) => (
          <option value={price}>Under {price}</option>
        ))}
      </select>
    );
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      searchRequest();
    }
  }
  return (
    <div action="" id="searchBarFlex">
      <div id="searchBarLeft">
        <CategorySelector />
      </div>
      <div id="searchBarCenter">
        <input
          type="text"
          placeholder="Search Amazon.in"
          id="searchBar"
          class="searchBarComponent"
          onKeyDown={handleKeyPress}
        />
      </div>

      <div id="searchBarRight">
        <PriceRangeSelector />
        <div class="searchBarComponent" onClick={searchRequest}>
          <img src={iconPath} alt="" id="searchIcon" />
        </div>
      </div>
    </div>
  );
}
function DevelopersCommunity() {
  const leftIconPath = "icons_&_logos/left.png";
  const rightIconPath = "icons_&_logos/right.png";
  return (
    <a id="dev-comm" class="component" href="/about">
      <img src={leftIconPath} alt="" />
      <div>
        <span class="thin">About</span>
        <p class="bold">Developer</p>
      </div>
      <img src={rightIconPath} alt="" />
    </a>
  );
}
function Cart() {
  let iconPath = "icons_&_logos/cart.jpg";
  const cart = JSON.parse(window.localStorage.getItem("amazon-cart"));
  return (
    <a id="cart" class="component" href="/cart">
      <div>
        <p id="cart-number" style={{ color: "orange" }}>
          {cart ? cart.length : 0}
        </p>
        <img src={iconPath} alt="" />
      </div>

      <p class="bold">Cart</p>
    </a>
  );
}
function Header() {
  return (
    <div id="header">
      <Logo />
      <SearchBar />
      <DevelopersCommunity />
      <Cart />
    </div>
  );
}

export default Header;
