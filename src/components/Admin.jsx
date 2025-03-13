import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Import axios for API calls

function Admin() {
    let [formdata, setformdata] = useState({
        name: "",
        address: "",
        state: "",
        city: "",
        pincode: "",
        number: "",
        payment: "",
    });

    let navigate = useNavigate();

    const inpChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };

    async function finalSubmit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/orders", formdata);
            console.log("Order Stored:", res.data);
            alert("Order Placed Successfully!");

            // Redirect to login page
            navigate("/");
        } catch (error) {
            console.error("Error storing order:", error);
            alert("Failed to place order, try again.");
        }
    }

    return (
        <section id="buy">
            <div id="signdiv">
                <form className="signform" onSubmit={finalSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="name" required onChange={inpChange} />

                    <label>Address</label>
                    <input type="text" name="address" required onChange={inpChange} />

                    <label>State</label>
                    <input type="text" name="state" required onChange={inpChange} />

                    <label>City</label>
                    <input type="text" name="city" required onChange={inpChange} />

                    <label>PinCode</label>
                    <input type="number" name="pincode" required onChange={inpChange} />

                    <label>Mobile Number</label>
                    <input type="text" name="number" required onChange={inpChange} />

                    <label>Mode of Payment</label>
                    <select name="payment" required onChange={inpChange}>
                        <option value="">Select Payment Mode</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="upi">UPI Payment</option>
                        <option value="net">Net Banking</option>
                        <option value="atm">Credit/Debit/ATM Card</option>
                    </select>

                    <label>Proceed to Buy</label>
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
}

export default Admin;

