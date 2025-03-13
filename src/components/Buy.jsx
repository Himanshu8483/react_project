import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Buy() {
    let [formdata, setFormData] = useState({
        name: "",
        address: "",
        state: "",
        city: "",
        pincode: "",
        number: "",
        payment: "",
    });
    let navigate = useNavigate();
    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };
    function finalSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/orders", formdata)  
            .then(res => {
                let orderId = res.data.id;  // Get the inserted order ID
                navigate(`/order?orderId=${orderId}`); // Redirect with ID in URL
            })
            .catch(error => console.error("Error placing order:", error));
    }
    return (
        <section id="buy">
            <div id="signdiv">
            <h2>Place Your Order</h2>
            <form className="signform" onSubmit={finalSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={inputChange} required />

                <label>Address</label>
                <input type="text" name="address" onChange={inputChange} required />

                <label>State</label>
                <input type="text" name="state" onChange={inputChange} required />

                <label>City</label>
                <input type="text" name="city" onChange={inputChange} required />

                <label>PinCode</label>
                <input type="number" name="pincode" onChange={inputChange} required />

                <label>Mobile Number</label>
                <input type="text" name="number" onChange={inputChange} required />

                <label>Mode of Payment</label>
                <select name="payment" onChange={inputChange} required>
                    <option value="">Select</option>
                    <option value="cash">Cash on Delivery</option>
                    <option value="upi">UPI Payment</option>
                    <option value="net">Net Banking</option>
                    <option value="atm">Credit/Debit Card</option>
                </select>

                <input className="submit" type="submit" value="Place Order" />
            </form>
            </div>
        </section>
    );
}

export default Buy;
