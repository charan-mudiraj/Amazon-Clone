import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList.jsx";
import "./css/Product.css";

function ProductContent() {
  function MainDiv() {
    function Views() {
      const dir = "temp_product/thumbnails/";
      const views = [];
      for (let i = 1; i <= 6; i++) {
        views.push(dir + i + ".jpg");
      }
      function View(href) {
        return (
          <div id="md-view">
            <img src={href} alt="" />
          </div>
        );
      }
      return <div id="md-views-flex">{views.map(View)}</div>;
    }
    function MainView(props) {
      return (
        <div id="md-curr-view">
          <img src={props.href} alt="" />
        </div>
      );
    }
    function DetialsDiv() {
      function TitleDiv() {
        return (
          <div id="md-titleDiv">
            <p>
              Acer Predator Helios 16 Gaming Laptop | 13th Gen Intel Core
              i7-13700HX | NVIDIA GeForce RTX 4060 | 16" 2560 x 1600 165Hz
              G-SYNC Display | 16GB DDR5 | 1TB Gen 4 SSD | Killer Wi-Fi 6E |
              PH16-71-74UU
            </p>
            <a>Visit the Acer Store</a>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        );
      }
      function PriceDiv() {
        return (
          <div id="md-priceDiv">
            <div id="md-price">
              <p id="discount">-11%</p>
              <p id="value">₹1,80,990.00</p>
            </div>
            <div id="md-mrp">
              <p id="text">M.R.P.: </p>
              <p id="value">₹2,07,999.00</p>
            </div>
            <div id="md-emi-options">
              <p>Inclusive of all taxes</p>
              <p>
                <b>EMI </b>starts at ₹6,885. No Cost Emi available{" "}
                <a>EMI options</a>
              </p>
            </div>
          </div>
        );
      }
      function OffersDiv() {
        const iconPath = "icons_&_logos/offers.png";
        const offers = [
          {
            title: "Partner Offers",
            desc: "Get up to 3 months Audible Membership.",
            offerCount: 2,
          },
          {
            title: "No Cost EMI",
            desc: "Upto ₹6,394.03 EMI interest savings on Amazon Pay ICICI.",
            offerCount: 1,
          },
          {
            title: "Back Offer",
            desc: "Upto ₹500.00 discount on Credit Cards, Debit Cards",
            offerCount: 1,
          },
        ];
        function OfferCard(props) {
          return (
            <div class="md-offerCard">
              <p>
                <b>{props.title}</b>
              </p>
              <p>{props.desc}</p>
              <a>{props.offerCount} offers</a>
            </div>
          );
        }
        return (
          <div id="md-offersDiv">
            <div id="title">
              <img src={iconPath} alt="" class="pc-icon" />
              <p>Offers</p>
            </div>
            <div id="cards">{offers.map(OfferCard)}</div>
          </div>
        );
      }
      function IconsDiv() {
        const icons = [
          { href: "", name: "7 days Returnable" },
          { href: "", name: "Free Delivery" },
          { href: "", name: "Top Brand" },
          { href: "", name: "Amazon Delivered" },
        ];
        function Icon(props) {
          return (
            <div id="md-icon">
              <img src={props.href} alt="" />
              <p>{props.name}</p>
            </div>
          );
        }
        return <div id="md-iconsDiv">{icons.map(Icon)}</div>;
      }
      function SpecsDiv() {
        return <div id="md-specsDiv"></div>;
      }
      function AboutDiv() {
        return <div id="md-aboutDiv"></div>;
      }

      return (
        <div id="md-details">
          <TitleDiv />
          <hr />
          <PriceDiv />
          <hr />
          <OffersDiv />
          <hr />
          <IconsDiv />
          <hr />
          <SpecsDiv />
          <hr />
          <AboutDiv />
        </div>
      );
    }
    function BuyCard() {
      return (
        <div id="md-buyCard">
          <p>
            Delivery by <b>Friday, 24 November</b>
          </p>
          <p style={{ color: "green" }}>
            <b>In Stock</b>
          </p>
          <p>
            Quantity:
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </p>
          <button id="add-to-cart-btn">Add to Cart</button>
          <button id="buy-now-btn">Buy Now</button>
          <hr />
          <button id="add-to-wish-list-btn">Add to Wish List</button>
        </div>
      );
    }
    return (
      <div id="pc-md">
        <Views />
        <MainView href="temp_product/5.jpg" />
        <DetialsDiv />
        <BuyCard />
      </div>
    );
  }
  function ReviewsDiv() {
    return <div id="pc-rd"></div>;
  }
  return (
    <div id="p-pc">
      <MainDiv />
      <ReviewsDiv />
    </div>
  );
}
function Product() {
  return (
    <div id="product">
      <Header />
      <NavBar />
      <ProductContent />
      {/* <ProductsList /> */}
      <Footer />
    </div>
  );
}

export default Product;
