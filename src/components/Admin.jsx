import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Admin() {
    const [apiData, setApiData] = useState([])
    const [insertData, setInsertData] = useState({})
    const [form, setForm] = useState(false)
    const [editData, setEditData] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:3000/orders')
        .then(res=>setApiData(res.data))
    }, [del])

    
    function del(id){
        axios.delete(`http://localhost:3000/orders/${id}`)
        .then(alert("Data Deleted"))
    }

    function inpChange(e){
        const {name, value} = e.target 
        setInsertData({...insertData, [name]: value})
    }
    function postSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/orders', insertData)
        .then(res=>{console.log(res.data)})
        .then(alert("Data Inserted"))
    }
    function editChange(e){
        const {name, value} = e.target
        setEditData({...editData, [name]:value})
    }
    function putSubmit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/orders/${editData.id}`, editData)
        setForm(false)
        alert("Data Updated")
    
    }

    
    return (
        <>
        <section id="adminbg">
                <Link className="gohome" to="/">Home</Link>
                <section>
                <div id="adminEdit">
                 <h1>Place An Order</h1>
                <form id="admin" onSubmit={postSubmit}>
                    <div>
                    <label>Name</label>
                    <input required type="text" placeholder="Name" name="name" onChange={inpChange}/>
                    <label>Address</label>
                    <input required type="text" placeholder="Address" name="address" onChange={inpChange}/>
                  
                    <label>Mobile No.</label>
                    <input required type="number" placeholder="Number" name="number" onChange={inpChange}/>
                    <select required name="payment" onChange={inpChange} id="">
                        <option value="">Select</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="upi">UPI Payment</option>
                        <option value="net">Net Banking</option>
                        <option value="atm">Credit/Debit Card/ATM</option>
                    </select>
                    <input required id="form" type="submit" value={"Place Order"} />
                    </div>
                </form>
            </div>
            <div id="editAdmin">
            {form && (
                <form id="admin"  onSubmit={putSubmit}>
            <h1>Edit User Details</h1>
                    <div>
                    <label>Name</label>
                    <input required type="text" placeholder="Name" value={editData.name} name="name" onChange={editChange} />
                    <label>Address</label>
                    <input required type="text" placeholder="Address" value={editData.address} name="address" onChange={editChange} />
                    <label>State</label>
                    <label>Mobile No.</label>
                    <input required type="text" placeholder="Mobile No." value={editData.number} name="number" onChange={editChange} />
                    <select required value={editData.payment} onChange={editChange} name="payment" id="">
                        <option value=""></option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="upi">UPI Payment</option>
                        <option value="net">Net Banking</option>
                        <option value="atm">Credit/Debit Card/ATM</option>
                    </select>
    
                    <input required id="form" type="submit" value={"Place Order"} />
                    </div>
                </form>)}
            </div>
            <div className="tableAdmin">
                <table>
                    <thead id="thead">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Mode</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {apiData.map((e, ind)=>(
                        <tr key={e.id}>
                            <td>{ind+1}</td>
                            <td>{e.name}</td>
                            <td>{e.address}</td>
                            <td>{e.number}</td>
                            <td>{e.payment}</td>
                            <td> <img src={e.productImage} alt={e.productName} width="50" /></td>
                            <td id="prodcutName">{e.productName}</td>
                            <td>{e.productPrice}</td>
                            <td><button className="clr" id="adminbtn" onClick={()=>del(e.id)}>Delete</button></td>
                            <td><button id="adminbtn" onClick={()=>(setForm(true), setEditData(e))}>Edit</button></td>
                        </tr>           
                        ))
                    }
                    </tbody>
                </table>
            </div>
            
        </section>
        </section>
        </>
    )
}
export default Admin