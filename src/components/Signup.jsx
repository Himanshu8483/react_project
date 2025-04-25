import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [formdata, setFormdata] = useState({
        name: "",
        age: "",
        contact: "",
        email: "",
        password: "",
        reenterPassword: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formdata.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (!/^[A-Za-z\s]{2,30}$/.test(formdata.name)) {
            newErrors.name = "Name should be 2-30 letters only.";
        }

        if (!formdata.age || formdata.age < 18 || formdata.age > 100) {
            newErrors.age = "Age must be between 18 and 100.";
        }

        if (!/^[1-9][0-9]{9}$/.test(formdata.contact)) {
            newErrors.contact = "Enter a valid 10-digit contact number.";
        }

        if (!formdata.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[\w.+\-]+@gmail\.com$/.test(formdata.email)) {
            newErrors.email = "Enter a valid Gmail address.";
        }

        if (!formdata.password) {
            newErrors.password = "Password is required.";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/.test(formdata.password)) {
            newErrors.password = "Password must be 8-16 characters, with upper, lower, number & symbol.";
        }

        if (formdata.reenterPassword !== formdata.password) {
            newErrors.reenterPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
            const exists = allUsers.some(user =>
                user.name === formdata.name || user.email === formdata.email
            );
            if (exists) {
                alert("User with same name or email already exists.");
                return;
            }

            allUsers.push(formdata);
            localStorage.setItem("allUsers", JSON.stringify(allUsers));
            alert("Signup successful!");
            navigate("/login");
        }
    };

    return (
        <section id="login">
            <div id="signdiv">
                <form className="signform" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>

                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                    <p>{errors.name}</p>

                    <label>Age</label>
                    <input type="number" name="age" placeholder="Age" onChange={handleChange} />
                    <p>{errors.age}</p>

                    <label>Contact</label>
                    <input type="text" name="contact" placeholder="Contact" onChange={handleChange} />
                    <p>{errors.contact}</p>

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <p>{errors.email}</p>

                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    <p>{errors.password}</p>

                    <label>Re-enter Password</label>
                    <input type="password" name="reenterPassword" placeholder="Re-enter Password" onChange={handleChange} />
                    <p>{errors.reenterPassword}</p>


                    <input className="submit" type="submit" value="Signup" />
                    <label>Already have an account?</label>
                    <Link className="submit" to="/login">Login</Link>
                </form>
            </div>
        </section>
    );
}

export default Signup;
