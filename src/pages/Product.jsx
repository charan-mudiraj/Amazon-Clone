import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList.jsx";

function ProductContent() {
  function MainDiv() {
    function Views() {
      const views = [];
      function View(props) {
        return (
          <div id="md-view">
            <img src={props.href} alt="" />
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
            <h3>This is Title</h3>
            <a>Visit the Acer Store</a>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p>12</p>
            </div>
          </div>
        );
      }
      function PriceDiv() {
        return (
          <div id="md-priceDiv">
            <div id="md-price">
              <p id="discount"></p>
              <p id="value">₹1,80,990.00</p>
            </div>
            <div id="md-mrpDiv">
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
        const offers = [
          {
            title: "Partner Offers",
            desc: "Get up to 3 months Audible Membership for ₹ 2 *T&C applyGet up to 3 months Audible Membership for ₹ 2 *T&C apply",
            offerCount: 2,
          },
          {
            title: "No Cost EMI",
            desc: "Upto ₹6,394.03 EMI interest savings on Amazon Pay ICICI…",
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
        return <div id="md-offersDiv">{offers.map(OfferCard)}</div>;
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
          <PriceDiv />
          <OffersDiv />
          <IconsDiv />
          <SpecsDiv />
          <AboutDiv />
        </div>
      );
    }
    function BuyCard() {
      return <div id="md-buyCard"></div>;
    }
    return (
      <div id="pc-md">
        <Views />
        <MainView href="" />
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
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Product;
