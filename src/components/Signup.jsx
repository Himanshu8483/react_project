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
                <label>Name:</label>
                <input required type="text" name="name"  onChange={inpChange} />
                <label>Age:</label>
                <input required type="number" name="age" onChange={inpChange}  />
                <label>Contact:</label>
                <input required type="number" name="contact" onChange={inpChange}  />
                <label>Email Id:</label>
                <input required type="text" name="email" onChange={inpChange}  />
                <label>Password:</label>
                <input required type="password" name="password" onChange={inpChange}  />
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