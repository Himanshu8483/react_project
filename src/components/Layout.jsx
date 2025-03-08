import { Link, Outlet } from "react-router-dom"
import {FaHome, FaUser,  FaCartPlus } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Layout(){
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
                <li><Link to='/'><FaHome/> Home</Link></li>
                <li><Link to='/Deal'><FaUser/> Login</Link></li>
                <li><Link to='/Deal'><FaCartPlus/> Cart</Link></li>
            </ul>
        </nav>
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
                  <li><Link to='/'><FaHome/> Home</Link></li>
                <li><Link to='Deal'><FaUser/> Login</Link></li>
                <li><Link to='/'><FaCartPlus/> Cart</Link></li>
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