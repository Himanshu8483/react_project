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
                <Link className="gohome" to="/">Home</Link>
                <section>
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
                            <th>Edit</th>
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
                            <td><button onClick={()=>del(e.id)}>Delete</button></td>
                            <td><button onClick={()=>(setForm(true), setEditData(e))}>Edit</button></td>
                        </tr>           
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div>
                <form onSubmit={postSubmit}>
                    <label>Name</label>
                    <input required type="text" name="name" onChange={inpChange}/>
                    <label>Address</label>
                    <input required type="text" name="address" onChange={inpChange}/>
                    <label>State</label>
                    <input required type="text" name="state" onChange={inpChange}/>
                    <label>City</label>
                    <input required type="text" name="city" onChange={inpChange}/>
                    <label>PinCode</label>
                    <input required type="number" name="pincode" onChange={inpChange}/>
                    <label>Mobile No.</label>
                    <input required type="number" name="number" onChange={inpChange}/>
                    <select required name="payment" onChange={inpChange} id="">
                        <option value=""></option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="upi">UPI Payment</option>
                        <option value="net">Net Banking</option>
                        <option value="atm">Credit/Debit Card/ATM</option>
                    </select>
                    <input required id="form" type="submit" value={"Place Order"} />
                </form>
            </div>
            <div>
            {form && (
                <form onSubmit={putSubmit}>
                    <label>Name</label>
                    <input required type="text" value={editData.name} name="name" onChange={editChange} />
                    <label>Address</label>
                    <input required type="text" value={editData.address} name="address" onChange={editChange} />
                    <label>State</label>
                    <input required type="text" value={editData.state} name="state" onChange={editChange} />
                    <label>City</label>
                    <input required type="text" value={editData.city} name="city" onChange={editChange} />
                    <label>PinCode</label>
                    <input required type="text" value={editData.pincode} name="pincode" onChange={editChange} />
                    <label>Mobile No.</label>
                    <input required type="text" value={editData.number} name="number" onChange={editChange} />
                    <select required value={editData.payment} onChange={editChange} name="payment" id="">
                        <option value=""></option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="upi">UPI Payment</option>
                        <option value="net">Net Banking</option>
                        <option value="atm">Credit/Debit Card/ATM</option>
                    </select>
    
                    <input required id="form" type="submit" value={"Place Order"} />
                </form>)}
            </div>
        </section>
        </>
    )
}
export default Admin