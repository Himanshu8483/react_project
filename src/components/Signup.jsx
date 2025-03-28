import { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom"; 

function Signup(){
    let [formdata, setformdata] = useState({
        name: "", 
        age: "",
        contact:"",
        email: "", 
        password: ""
    });
    let loginnav = useNavigate();

    const inpChange=(e)=>{
        const { name, value } = e.target; 
        setformdata({ ...formdata, [name]: value }); 
        // or 
        // setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }

    function finalSubmit (e){
        e.preventDefault()
        console.log(formdata)
        localStorage.setItem("userData", JSON.stringify(formdata))
        localStorage.setItem("isLogin", "true")
        loginnav("/login")
    }

    return(
        <>
                <Link className="gohome" to="/">Home</Link>
        <section id="signup">
            <div id="signdiv">
            <form className="signform" onSubmit={finalSubmit}>
                <h1>Sign Up</h1>
                <label>Name:</label>
                <input required type="text"placeholder="Name" name="name"  onChange={inpChange} />
                <label>Age:</label>
                <input required type="number" placeholder="Age" name="age" onChange={inpChange}  />
                <label>Contact:</label>
                <input required type="number" placeholder="Contact" name="contact" onChange={inpChange}  />
                <label>Email Id:</label>
                <input required type="text" placeholder="Email Id" name="email" onChange={inpChange}  />
                <label>Password:</label>
                <input required type="password" placeholder="Password" name="password" onChange={inpChange}  />
                <input className="submit" required type="submit" />
                <label>Already Have an Account: </label>
                <Link className="submit" to="/Login">Login</Link>
                </form>
            </div>

        </section>

        </>
    )
}
export default Signup