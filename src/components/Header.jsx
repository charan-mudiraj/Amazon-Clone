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
function SearchBar() {}
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
