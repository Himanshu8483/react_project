import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Order() {
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();
    const [Canceled, setCanceled] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:3000/orders") 
            .then(res => {
                if (res.data.length > 0) {
                    setOrder(res.data[res.data.length - 1]); 
                }
            })
            // .catch(error => console.error("Error fetching order:", error));
    }, []);

    let del=()=>{
        if (order.id) {
        axios.delete(`http://localhost:3000/orders/${order.id}`)
        .then(alert("Order deleted successfully!"))
        .then(setCanceled(true))
        }
    }
    let del1=(id)=>{
        axios.delete(`http://localhost:3000/orders/${id}`)
        .then(alert("Order deleted successfully!"))
        .then(setCanceled(true))
    }
    if (!order) {
        return <h2>No order found! Go back to home.</h2>;
    }

    return (
            <div id="order">
                <Link className="gohome" to="/">Home</Link>

            {/* <h2>Order {Canceled ? 'Canceled' : 'Confirmation'}</h2>
            {Canceled ? (
                <>
                    <p>Your order has been successfully canceled.</p>
                    <button style={{ backgroundColor: "gray"}}>Canceled</button>
                </>
            ) : (
                <> */}

            <h2>Order {Canceled? 'Canceled': 'Confirmation'}</h2>
            <img src={order.productImage} alt={order.productName} width="200" />
            <p>Your order for <b>{order.productName}</b> ({order.productPrice}) has been placed successfully!</p>
            
            <h2>Delivery Details</h2>
            <p><b>Name:</b> {order.name}</p>
            <p><b>Address:</b> {order.address}</p>
            <p><b>Mobile:</b> {order.number}</p>
            <p><b>Payment Mode:</b> {order.payment}</p>
            {/* <button onClick={del} style={{backgroundColor: Canceled? "gray": "brown"}}>{Canceled? "Canceled": "Cancel Order"}</button> */}
            {/* or  */}
            {/* <button onClick={() => del1(order.id)} style={{ backgroundColor: "red"}}>Cancel Order</button> */}
            <button onClick={()=>del1(order.id)} style={{backgroundColor: Canceled? "gray": "brown"}}>{Canceled? "Canceled": "Cancel Order"}</button>
       
       
       
       
            {/* </>
            )} */}
        </div>
    );
}

export default Order;
