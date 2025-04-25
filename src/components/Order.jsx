import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const userCart = storedCart.filter(item => item.email === user?.email);
    setCartItems(userCart);
  }, []);

  const deleteFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);

    const fullCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedFullCart = fullCart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedFullCart));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.productPrice) * item.quantity, 0);
  };

  const buy = (item) => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    if (isLogin) {
      localStorage.setItem("product", JSON.stringify({
        name: item.productName,
        price: item.productPrice,
        image: item.productImage,
        quantity: item.quantity || 1
      }));
      
      navigate("/Buy");
    } else {
      alert("Please Login First");
      navigate("/login");
    }
  };

  if (cartItems.length === 0) return <h2>Your cart is empty!</h2>;

  return (
    <div id="cart">
      <Link className="gohome" to="/">Home</Link>
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.productImage} alt={item.productName} width="150" />
          <h3>{item.productName}</h3>
          <p>Price: ₹{item.productPrice} × {item.quantity}</p>
          <button onClick={() => deleteFromCart(item.id)}>Remove</button>
          <button onClick={() => buy(item)}>Buy Now</button>
        </div>
      ))}
      <h2>Total Price: ₹{getTotal()}</h2>
    </div>
  );
}

export default Cart;
