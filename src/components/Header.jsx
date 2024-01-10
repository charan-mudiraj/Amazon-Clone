import "./css/Header.css";
import { products, productsCategories } from "../ProductsMetaData";
import { useNavigate } from "react-router-dom";

function Logo() {
  let iconPath = "icons_&_logos/logo.png";
  return (
    <a href="/" id="logoDiv">
      <div id="logo" className="component">
        <img src={iconPath} alt="Amazon Logo" id="logoImage" />
        <p id="in">.in</p>
      </div>
    </a>
  );
}
function SearchBar() {
  const navigate = useNavigate();
  let iconPath = "icons_&_logos/search.png";
  function SearchFilterOption({ category }) {
    return <option>{category}</option>;
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
      <select id="searchFilter" className="searchBarComponent">
        <option>All</option>
        {productsCategories.map((category) => (
          <SearchFilterOption category={category.name} key={category.id} />
        ))}
      </select>
    );
  }
  function PriceRangeSelector() {
    const priceRanges = [200000, 100000, 50000, 25000, 10000, 5000];
    return (
      <select id="priceFilter" className="searchBarComponent">
        {priceRanges.map((price) => (
          <option value={price} key={price}>
            Under {price}
          </option>
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
          className="searchBarComponent"
          onKeyDown={handleKeyPress}
        />
      </div>

      <div id="searchBarRight">
        <PriceRangeSelector />
        <div className="searchBarComponent" onClick={searchRequest}>
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
    <a id="dev-comm" className="component" href="/about">
      <img src={leftIconPath} alt="" />
      <div>
        <span className="thin">About</span>
        <p className="bold">Developer</p>
      </div>
      <img src={rightIconPath} alt="" />
    </a>
  );
}
function Cart() {
  let iconPath = "icons_&_logos/cart.jpg";
  const cart = JSON.parse(window.localStorage.getItem("amazon-cart"));
  return (
    <a id="cart" className="component" href="/cart">
      <div>
        <p id="cart-number" style={{ color: "orange" }}>
          {cart ? cart.length : 0}
        </p>
        <img src={iconPath} alt="" />
      </div>

      <p className="bold">Cart</p>
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
