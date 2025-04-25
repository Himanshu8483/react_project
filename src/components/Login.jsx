import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [formdata, setformdata] = useState({ name: "", password: "" });
    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("allUsers")) || [];
        setAllUsers(users);
    }, []);

    const inpchange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };

    const finalSubmit = (e) => {
        e.preventDefault();

        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(formdata.name)) {
            alert("Name should contain only letters.");
            return;
        }

        if (formdata.name === "admin" && formdata.password === "admin123") {
            alert("Admin Login Successful!");
            const adminData = { name: "Admin", role: "admin" };
            localStorage.setItem("userData", JSON.stringify(adminData));
            localStorage.setItem("isLogin", "true");
            navigate("/Admin");
            return;
        }

        const matchedUser = allUsers.find(
            (user) => user.name === formdata.name && user.password === formdata.password
        );

        if (!matchedUser) {
            alert("Invalid username or password.");
        } else {
            alert("Login Successful!");
            localStorage.setItem("userData", JSON.stringify(matchedUser));
            localStorage.setItem("isLogin", "true");
            navigate("/");
        }
    };

    return (
        <section id="login">
            <div id="signdiv">
                <form className="signform" onSubmit={finalSubmit}>
                    <h1>Log In</h1>

                    <label>Username</label>
                    <input required type="text" placeholder="Username" name="name" onChange={inpchange} />

                    <label>Password</label>
                    <input required type="password" placeholder="Password" name="password" onChange={inpchange} />

                    <input className="submit" type="submit" value="Login" />

                    <label>New User, Create an Account:</label>
                    <Link className="submit" to='/Signup'>SignUp</Link>
                </form>
            </div>
        </section>
    );
}

export default Login;
