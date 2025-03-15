import axios from "axios";
import { useEffect, useState } from "react";
function Order({product}) {
    const [apiData, setApiData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/orders')
        .then(res=>setApiData(res.data))
    }, [del])

    function del(id){
        axios.delete(`http://localhost:3000/orders/${id}`)
        .then(alert("Data Deleted"))
    }
    if (!product) {
        return <h2>No order found! Go back to home.</h2>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            <div>
            <h2>Order Confirmation</h2>
            <p>Your order for {product.name} (₹{product.price}) has been placed successfully!</p>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>PinCode</th>
                            <th>Number</th>
                            <th>Payment Mode</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((e, ind)=>(
                        <tr key={e.id}>
                            <td>{ind+1}</td>
                            <td>{e.name}</td>
                            <td>{e.address}</td>
                            <td>{e.state}</td>
                            <td>{e.city}</td>
                            <td>{e.pincode}</td>
                            <td>{e.number}</td>
                            <td>{e.payment}</td>
                            <td><button onClick={()=>del(e.id)}>Cancel</button></td>
                        </tr>           
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Order;
