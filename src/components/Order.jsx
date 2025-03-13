import { useEffect, useState } from "react";

function Order() {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem("orderDetails"));
        if (storedOrder) {
            setOrder(storedOrder);
        }
    }, []);

    if (!order) {
        return <h2>No Order Found</h2>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            <img src={order.productImage} alt={order.productName} width="150" />
            <p><strong>Product:</strong> {order.productName}</p>
            <h2 style={{ color: "salmon" }}>{order.productPrice}</h2>

            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>State:</strong> {order.state}</p>
            <p><strong>City:</strong> {order.city}</p>
            <p><strong>PinCode:</strong> {order.pincode}</p>
            <p><strong>Mobile:</strong> {order.number}</p>
            <p><strong>Payment Mode:</strong> {order.payment}</p>
        </div>
    );
}

export default Order;
