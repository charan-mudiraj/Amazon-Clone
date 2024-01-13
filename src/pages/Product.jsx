import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList.jsx";
import React, { useState } from "react";
import "./css/Product.css";
import { products } from "../ProductsMetaData";
import { useSearchParams } from "react-router-dom";

function ProductContent(props) {
  const product = products[props.id];
  function MainDiv() {
    const dir = "products_images/" + product.id + "/";
    const [mainImgIndex, setMainImgIndex] = useState(0);
    function Views() {
      function updateMainView(e) {
        const imgId = parseInt(e.target.id);
        setMainImgIndex(imgId - 1);
      }
      function View({ id }) {
        return (
          <img
            src={dir + id + ".jpg"}
            alt=""
            className="md-view"
            onClick={updateMainView}
            onMouseEnter={updateMainView}
            id={id}
          />
        );
      }
      const viewsIds = [1, 2, 3, 4, 5, 6];
      return (
        <div id="md-views-flex">
          {viewsIds.map((id, index) => (
            <View id={id} key={index} />
          ))}
        </div>
      );
    }
    function MainView() {
      const imagesArr = [
        <img src={dir + "1.jpg"} alt="" />,
        <img src={dir + "2.jpg"} alt="" />,
        <img src={dir + "3.jpg"} alt="" />,
        <img src={dir + "4.jpg"} alt="" />,
        <img src={dir + "5.jpg"} alt="" />,
        <img src={dir + "6.jpg"} alt="" />,
      ];
      return <div id="md-curr-view">{imagesArr[mainImgIndex]}</div>;
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
        function OfferCard({ offer }) {
          return (
            <div className="md-offerCard">
              <p>
                <b>{offer.title}</b>
              </p>
              <p>{offer.desc}</p>
              <a>{offer.offerCount} offers</a>
            </div>
          );
        }
        return (
          <div id="md-offersDiv">
            <div id="title">
              <img src={iconPath} alt="" className="pc-icon" />
              <p>Offers</p>
            </div>
            <div id="cards">
              {offers.map((offer, index) => (
                <OfferCard offer={offer} key={index} />
              ))}
            </div>
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
        function Icon({ icon }) {
          return (
            <div id="md-icon">
              <img src={icon.href} alt="" />
              <p>{icon.name}</p>
            </div>
          );
        }
        return (
          <div id="md-iconsDiv">
            {icons.map((icon, index) => (
              <Icon icon={icon} key={index} />
            ))}
          </div>
        );
      }
      function SpecsDiv() {
        function Spec(spec) {
          return (
            <div className="md-spec">
              <p>
                <b>{spec.title}</b>
              </p>
              <p>{spec.desc}</p>
            </div>
          );
        }
        return (
          <div id="md-specsDiv">
            {product.specs.map((spec, index) => (
              <Spec spec={spec} key={index} />
            ))}
          </div>
        );
      }
      function AboutDiv() {
        function AboutItem({ aboutText }) {
          return <li>{aboutText}</li>;
        }
        return (
          <div id="md-aboutDiv">
            <p>
              <b>About this Item</b>
            </p>
            <ul>
              {product.about.map((aboutText, index) => (
                <AboutItem aboutText={aboutText} key={index} />
              ))}
            </ul>
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
      function addToCart() {
        const quantity = Number(
          document.getElementById("productQuantity").value
        );
        let cart = JSON.parse(window.localStorage.getItem("amazon-cart"));
        if (!cart) {
          cart = [];
        }
        let item;
        if (cart.length != 0) {
          item = cart.find((item) => item.id === props.id);
        }
        if (item) {
          item.qty += quantity;
        } else {
          item = {
            id: props.id,
            qty: quantity,
          };
          cart.push(item);
          document.getElementById("cart-number").innerHTML = cart.length;
        }
        window.localStorage.setItem("amazon-cart", JSON.stringify(cart));
        alert("Added to Cart !\nQuantity: " + quantity);
      }
      return (
        <div id="md-buyCard">
          <p>
            Delivery by <b>{product.delivery_day}</b>
          </p>
          <p style={{ color: "green" }}>
            <b>In Stock</b>
          </p>
          <div>
            Quantity:
            <select id="productQuantity">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <button id="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
          <button id="buy-now-btn" onClick={() => alert("Order Placed !")}>
            Buy Now
          </button>
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
function Product() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div id="product">
      <Header />
      <NavBar />
      <ProductContent id={id} />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Product;
