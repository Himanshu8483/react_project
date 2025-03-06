import {  FcPaid } from "react-icons/fc"


function Navbar(){
    return(
        <>
        <nav>
            <div>
            
            <img src="logo.png" width={"100px"} alt="logo" /><span>East&Shop</span></div>
            <div>
                <input type="text" placeholder="Search for Product.."/>
                <button>Search</button>
             </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li><FcPaid/> Cart</li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar