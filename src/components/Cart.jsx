import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (!userData) {
      alert("Please log in first.");
      return;
    }

    axios.get("http://localhost:3000/orders")
      .then((res) => {  
        const userOrders = res.data.filter(order => order.name === userData.name).reverse();
        setOrders(userOrders);
      })
      // .catch((error) => console.error("Error fetching orders:", error));
  },[]);

  if (!userData) {
    return <h2>You are not logged in. Please log in to see your orders.</h2>;
  }

  if (orders.length == 0) {
    return <h2>No orders found for {userData.name}.</h2>;
  }

  return (
    <>
    <Link className="gohome" to="/">Home</Link>
    <div id="cart">
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id} >
          <img src={order.productImage} alt={order.productName} width="150" />
          <h3>{order.productName}</h3>
          <p>Price: {order.productPrice}</p>
          <p>Address: {order.address}</p>
          <p>Payment Mode: {order.payment}</p>
        </div>
      ))}
    </div>
    </>

  );
}

export default Cart;
