import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { products } from "../ProductsMetaData";
import { useState } from "react";
import "./css/Cart.css";

function CartItem({ item, setCart }) {
  const imgPath = "products_images/" + item.id + "/1.jpg";
  function deleteItem(e) {
    const deleteId = Number(e.target.id);
    const cart = JSON.parse(window.localStorage.getItem("amazon-cart"));
    const deleteIndex = cart.findIndex((item) => item.id === deleteId);
    cart.splice(deleteIndex, 1);
    setCart(cart);
    window.localStorage.setItem("amazon-cart", JSON.stringify(cart));
  }
  return (
    <>
      <div class="cart-item" id={item.id} key={item.id}>
        <a href={"/product-id=" + item.id}>
          <img src={imgPath} alt="" />
        </a>

        <div>
          <a
            href={"/product-id=" + item.id}
            style={{ textDecoration: "none", color: "black", fontSize: "18px" }}
          >
            <p style={{ marginTop: "20px" }}>{products[item.id].title}</p>
          </a>
          <div>
            <p>Quantity: {item.qty}</p>|
            <a onClick={deleteItem} id={item.id} style={{ fontSize: "16px" }}>
              Delete
            </a>
          </div>
        </div>
        <p
          style={{
            marginLeft: "auto",
            marginTop: "20px",
            color: "rgba(17, 17, 17, 0.952)",
          }}
        >
          <b>₹{products[item.id].price}</b>
        </p>
      </div>
      <hr />
    </>
  );
}
function CartContent() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("amazon-cart"))
  );
  let total = 0;
  if (cart && cart.length) {
    for (let i = 0; i < cart.length; i++) {
      total +=
        parseInt(products[cart[i].id].price.replace(/,/g, ""), 10) *
        cart[i].qty;
    }
  }
  function AllItemsList() {
    return (
      <>
        {cart.map((item) => (
          <CartItem item={item} setCart={setCart} />
        ))}
        <p style={{ textAlign: "end", marginTop: "10px", fontSize: "20px" }}>
          Subtotal ({cart.length} items): ₹
          <b style={{ color: "rgba(17, 17, 17, 0.952)" }}>{total}</b>
        </p>
      </>
    );
  }
  function BuyCard() {
    return (
      <div id="cart-buy-card">
        <p style={{ fontSize: "20px" }}>
          Subtotal ({cart.length} items): ₹
          <b style={{ color: "rgba(17, 17, 17, 0.952)" }}>{total}</b>
        </p>
        <button onClick={() => alert("Order Placed !")}>Proceed to Buy</button>
      </div>
    );
  }
  return (
    <div id="cart-content">
      <div id="cart-products">
        <p style={{ fontSize: "27px" }}>Shopping Cart</p>
        <p style={{ color: "grey", textAlign: "end" }}>Price</p>
        <hr />
        {cart && cart.length ? (
          <AllItemsList />
        ) : (
          <p style={{ textAlign: "center", marginTop: "100px", color: "gray" }}>
            No products added to cart
          </p>
        )}
      </div>
      {cart && cart.length ? <BuyCard /> : ""}
    </div>
  );
}

export default function Cart() {
  return (
    <div id="cart-page">
      <Header />
      <NavBar />
      <CartContent />
      <Footer />
    </div>
  );
}
