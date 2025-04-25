import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Buy() {
    const [formdata, setFormData] = useState({});
    const navigate = useNavigate();
    const product = JSON.parse(localStorage.getItem('product'));

    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };

    if (!product) {
        return <h2>No product selected! Go back to home.</h2>;
    }

    const quantity = product.quantity;
    const totalAmount = product.price * quantity;

    const finalSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));

        const orderData = {
            ...formdata,
            email: userData.email,
            productName: product.name,
            productPrice: product.price,
            productImage: product.image,
            quantity: quantity,
            totalAmount: totalAmount 
        };

        axios.post("http://localhost:3000/orders", orderData)
            .then(res => {
                const orderId = res.data.id;
                alert(`Successfully placed order for ${product.name} (x${quantity|| 1})\nTotal Amount: ₹${totalAmount || product.price}`);
                navigate(`/order?orderId=${orderId}`);
            });
    };

    return (
        <section id="buy">
            <div>
                <h2>Buy Product</h2>
                <img src={product.image} alt={product.name} width="200" />
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {quantity || 1}</p>
                <p>Total: {totalAmount || product.price}</p>
            </div>

            <div id="signdiv">
                <h2>Place Your Order</h2>
                <form className="signform" onSubmit={finalSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={inputChange} required />

                    <label>Address</label>
                    <input type="text" name="address" onChange={inputChange} required />

                    <label>Mobile Number</label>
                    <input type="tel" pattern="[0-9]{10}" maxLength={10} name="number" onChange={inputChange} required />

                    <label>Mode of Payment</label>
                    <select className="select" name="payment" onChange={inputChange} required>
                        <option value="">Select</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="upi">UPI Payment</option>
                        <option value="net">Net Banking</option>
                        <option value="atm">Credit/Debit Card/ATM</option>
                    </select>

                    <input className="submit" type="submit" value="Place Order" />
                </form>
            </div>
        </section>
    );
}

export default Buy;
