import {useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
function Login() {
    let [ formdata, setformdata]= useState({
        name:"",
        password:"",
    })
    let loginnav=useNavigate();
    let [signdata, setsign]= useState()

    function inpchange(e){
        const {name, value} = e.target;
        setformdata({...formdata, [name]: value})
    }
    function finalSubmit(e){
        e.preventDefault()
        if(!signdata){
            alert("User Not Found, Please Sign Up First.")
            return;
        }
        if(signdata.name !==formdata.name || signdata.password !== formdata.password)
        {
            alert("User Not Found")
        }
        else{
            alert("Login Successful!")
            loginnav("/")
        }
        window.location.reload(); // Force refresh
    }

    useEffect(()=>{
        let sign = JSON.parse(localStorage.getItem("userData"))
        setsign(sign)
    },[])
    return(
        <>
        <section id="login">
            <div id="signdiv">
            <form className="signform" onSubmit={finalSubmit}>
                <label>Username</label>
                <input required type="text" name="name" onChange={inpchange} />
                <label>Password</label>
                <input required type="password" name="password" onChange={inpchange} />
                <input className="submit" required type="submit" value="Login" />
                <label>New User, Create an Account: </label>
                <Link className="submit" to='/Signup'>SignUp</Link> 
            </form> 
            </div>
        </section>
          
        </>
    )
}
export default Login