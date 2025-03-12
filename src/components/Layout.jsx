import { Link, Outlet } from "react-router-dom"
import {FaHome, FaUser,  FaCartPlus } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";

function Layout(){
// for login
const [user, setUser] = useState();

useEffect(() => {
      const storedUser = localStorage.getItem("userData");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); 
      }
    }, []);

// Logout function
const handleLogout = () => {
  localStorage.removeItem("userData");
  setUser();
};
    return(
        <>
        <nav>
            <div id="logo">
            <img src="logo.png" width={"100px"} alt="logo" /><span>East&Shop</span></div>
            <div>
                <input type="text" placeholder="Search for Product.."/>
                <button>Search</button>
             </div>
            <ul className="ulTag">
                <li><Link className="submit" to='/'><FaHome/> Home</Link></li>
                <li><Link className="submit" to='/Deal'><FaCartPlus/> Cart</Link></li>
                <li>
                  {user ? (
                      <Link className="submit" onClick={handleLogout}><FaUser/> Logout</Link>
                  ) : (
                    <Link className="submit" to='/Login'><FaUser/> Login</Link>
                )}
              </li>
            </ul>
        </nav>
        <div>
      {user ? (
        <div className="username">
          <strong>Welcome {user.name}</strong>
        </div>
      ) : (
        <h3></h3>
      )}
    </div>
      
        <div>
            <Outlet/>
        </div>
        
        <footer>
              <div className="container">
                <div className="about">
                  <h3>About Us</h3>
                  <p>
                    We are an online marketplace offering the best deals on top products. 
                    Shop with confidence and enjoy great savings.
                  </p>
                </div>
        
                {/* Customer Service */}
                <div>
                  <h3>Customer Service</h3>
                  <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Returns & Refunds</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
        
                {/* Quick Links */}
                <div>
                  <h3>Quick Links</h3>
                  <ul>
                <li><Link className="submit" to='/'><FaHome/> Home</Link></li>
                <li><Link className="submit" to='/Login'><FaUser/> Login</Link></li>
                <li><Link className="submit" to='/Signup'><FaUser/> Sign Up</Link></li>
                <li><Link className="submit" to='/Deal'><FaCartPlus/> Cart</Link></li>
            </ul>
                </div>
        
                {/* Social Media & Payment */}
                <div>
                  <h3>Follow Us</h3>
                  <div className="icon">
                    <a href="#"><FaFacebook/></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><FaTwitter/></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><FaInstagram/></a>
                  </div><br />
                  <h3>We Accept</h3>
                  <div>
                    <span>Visa</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>MasterCard</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>UPI</span>
                  </div>
                </div>
              </div>
        
              {/* Copyright Section */}
              <div className="copyright">
                &copy; 2025 East&Shop. All Rights Reserved.
              </div>
            </footer>
        </>
    )
}
export default Layout