import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList.jsx";
import React, { useState } from "react";
import "./css/Product.css";
import { products } from "../ProductsMetaData";

function ProductContent(props) {
  const product = products[props.id];
  let [mainImgId, setMainImgId] = useState(1);
  let [mainImgVisible, setMainImgVisible] = useState(true);
  function MainDiv() {
    function Views() {
      const dir = "products_images/" + product.id + "/";
      const views = [1, 2, 3, 4, 5, 6];
      function updateMainView(event) {
        let id = event.target.getAttribute("itemID");
        if (id != null) {
          console.log(id);
          setMainImgId(Number(id));
        }
      }
      function View(imgNo) {
        return (
          <div id="md-view" onMouseOver={updateMainView} itemID={imgNo}>
            <img src={dir + imgNo + ".jpg"} alt="" />
          </div>
        );
      }
      return <div id="md-views-flex">{views.map(View)}</div>;
    }
    function MainView() {
      let imgPath = "products_images/" + product.id + "/" + mainImgId + ".jpg";
      return (
        <div id="md-curr-view">
          <img src={imgPath} alt="" />
        </div>
      );
    }
    function DetialsDiv() {
      function TitleDiv() {
        return (
          <div id="md-titleDiv">
            <p>{product.title}</p>
            <a>Visit the Acer Store</a>
            <div id="rating">
              <p>{product.rating}</p>
            </div>
          </div>
        );
      }
      function PriceDiv() {
        return (
          <div id="md-priceDiv">
            <div id="md-price">
              <p id="discount">-{product.discount}</p>
              <p id="value">₹{product.price}</p>
            </div>
            <div id="md-mrp">
              <p id="text">M.R.P.: </p>
              <p id="value">₹{product.mrp}</p>
            </div>
            <div id="md-emi-options">
              <p>Inclusive of all taxes</p>
              <p>
                <b>EMI </b>starts at ₹{product.EMI}.
                <br /> No Cost Emi available <a>EMI options</a>
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
            desc: "Upto ₹500.00 discount on Credit Cards & Debit Cards.",
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
        const dir = "icons_&_logos/";
        const icons = [
          { href: dir + "icon-returns.png", name: "7 days Returnable" },
          { href: dir + "icon-amazon-delivered.png", name: "Free Delivery" },
          { href: dir + "icon-top-brand.png", name: "Top Brand" },
          {
            href: dir + "trust_icon_free_shipping.png",
            name: "Amazon Delivered",
          },
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
        function Spec(spec) {
          return (
            <div class="md-spec">
              <p>
                <b>{spec.title}</b>
              </p>
              <p>{spec.desc}</p>
            </div>
          );
        }
        return <div id="md-specsDiv">{product.specs.map(Spec)}</div>;
      }
      function AboutDiv() {
        function AboutItem(aboutText) {
          return <li>{aboutText}</li>;
        }
        return (
          <div id="md-aboutDiv">
            <p>
              <b>About this Item</b>
            </p>
            <ul>{product.about.map(AboutItem)}</ul>
          </div>
        );
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
            Delivery by <b>{product.delivery_day}</b>
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
      <hr />
      <ReviewsDiv />
    </div>
  );
}
function Product(props) {
  return (
    <div id="product">
      <Header />
      <NavBar />
      <ProductContent id={props.id} />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Product;
