import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Order() {
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/orders") // Fetch all orders
            .then(res => {
                if (res.data.length > 0) {
                    setOrder(res.data[res.data.length - 1]); // Get the latest order
                }
            })
            .catch(error => console.error("Error fetching order:", error));
    }, []);

    if (!order) {
        return <h2>No order found! Go back to home.</h2>;
    }

    return (
        <div id="order">
            <h2>Order Confirmation</h2>
            <img src={order.productImage} alt={order.productName} width="200" />
            <p>Your order for <b>{order.productName}</b> ({order.productPrice}) has been placed successfully!</p>
            
            <h2>Delivery Details</h2>
            <p><b>Name:</b> {order.name}</p>
            <p><b>Address:</b> {order.address}</p>
            <p><b>Mobile:</b> {order.number}</p>
            <p><b>Payment Mode:</b> {order.payment}</p>

            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}

export default Order;
