import "./css/Header.css";

function Logo() {
  let iconPath = "icons_&_logos/logo.png";
  return (
    <div id="logo" class="component">
      <img src={iconPath} alt="Amazon Logo" id="logoImage" />
      <p id="in">.in</p>
    </div>
  );
}
function Location() {
  let userName = "Charan";
  let city = "Hyderabad";
  let postalCode = "500052";
  let iconPath = "icons_&_logos/location.png";

  return (
    <div id="location" class="component">
      <img src={iconPath} alt="" id="locationIcon" />
      <p class="thin">Deliver to {userName}</p>
      <p class="bold">
        {city} {postalCode}
      </p>
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
function LanguageSelector() {}
function AccountAndLists() {}
function ReturnsAndOrders() {}
function Cart() {}
function Header() {
  return (
    <div id="header">
      <Logo />
      <Location />
      <SearchBar />
      <LanguageSelector />
      <AccountAndLists />
      <ReturnsAndOrders />
      <Cart />
    </div>
  );
}

export default Header;
