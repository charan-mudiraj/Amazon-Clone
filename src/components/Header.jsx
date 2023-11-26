import "./css/Header.css";

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
function Location() {
  let iconPath = "icons_&_logos/location.png";

  return (
    <div id="location" class="component">
      <img src={iconPath} alt="" id="locationIcon" />
      <span class="thin">Deliver to Hyderabad</span>
      <p class="bold">Update location</p>
    </div>
  );
}
function SearchBar() {
  let iconPath = "icons_&_logos/search.png";
  const searchFilterOptions = [
    { title: "All Categories", value: "all" },
    { title: "Alexa Skills", value: "skills" },
    { title: "Amazon Fashion", value: "fashion" },
    { title: "Amazon Fresh", value: "fresh" },
    { title: "Amazon Pharmacy", value: "pharmacy" },
    { title: "Appliances", value: "appliances" },
    { title: "Beauty", value: "beauty" },
  ];
  function SearchFilterOption(option) {
    return (
      <option value={option.value}>
        <p>{option.title}</p>
      </option>
    );
  }
  function SearchRequest() {
    console.log("search Request");
  }
  return (
    <form action="" id="searchBarFlex">
      <div id="searchBarLeft">
        <select
          name="search filter"
          id="searchFilter"
          class="searchBarComponent"
        >
          {searchFilterOptions.map(SearchFilterOption)}
        </select>
      </div>
      <div id="searchBarCenter">
        <input
          type="text"
          placeholder="Search Amazon.in"
          id="searchBar"
          class="searchBarComponent"
        />
      </div>
      <div
        id="searchBarRight"
        class="searchBarComponent"
        onClick={SearchRequest}
      >
        <img src={iconPath} alt="" id="searchIcon" />
      </div>
    </form>
  );
}
function LanguageSelector() {
  const flagPath = "icons_&_logos/flag.png";
  return (
    <div id="h-lang" class="component">
      <img src={flagPath} alt="flag" />
      <p>EN</p>
      <datalist id="browsers">
        <option>avds</option>
        <option>sadsfs</option>
      </datalist>
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
  return (
    <div id="cart" class="component">
      <img src={iconPath} alt="" />
      <p class="bold">Cart</p>
    </div>
  );
}
function Header() {
  return (
    <div id="header">
      <Logo />
      <Location />
      <SearchBar />
      <LanguageSelector />
      <DevelopersCommunity />
      <Cart />
    </div>
  );
}

export default Header;
