import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';


function Home(){
let navigate=useNavigate()
    
function buy(productName, productPrice, productImage){
    if(localStorage.getItem("isLogin") === "true"){
        localStorage.setItem('product', JSON.stringify({ name: productName, price: productPrice, image: productImage }));
            // setProduct({ name: productName, price: productPrice, image: productImage }); // Set product details in state
        navigate("/Buy")
    }
    else{
        alert("Please Login First")
    }
}

    return(
        <>
    
   <section id="hero">
            <div className="container">
                <div onClick={() => navigate("/mobile")} style={{ cursor: "pointer" }}>
                <img src="mobile.png" alt="Mobile" />
                <h3>Mobiles</h3>
                </div>
                <div onClick={() => navigate("/Fashion")} style={{ cursor: "pointer" }}>
                    <img src="fashion.png" alt="" />
                    <h3>Fashion</h3>
                </div>
                <div onClick={() => navigate("/watch")} style={{ cursor: "pointer" }}>
                    <img src="watch.png" alt="" />
                    <h3>Watches</h3>
                </div>
                <div onClick={() => navigate("/Laptop")} style={{ cursor: "pointer" }}>
                    <img src="laptop.png" alt="" />
                    <h3>laptops</h3>
                </div>
                <div onClick={() => navigate("/Shoes")} style={{ cursor: "pointer" }}>
                    <img src="shoes.png" alt="" />
                    <h3>Shoes</h3>
                </div>
            </div>
            </section>
            <section>
                <Carousel>
                    <Carousel.Item onClick={() => navigate("/Laptop")} style={{ cursor: "pointer" }}>
                    <img
                        className="d-block w-100"
                        src="banner2.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item onClick={() => navigate("/Fashion")} style={{ cursor: "pointer" }}>
                    <img
                        className="d-block w-100"
                        src="banner3.jpg"
                        alt="Third slide"
                        
                    />
                    
                    <Carousel.Caption>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
    <section id="deal">
        <div className="color"></div>

        <h3>Top Offers on Watches</h3>

            <div id="shadow" className="container">
            <div>
                <img src="onepluswatch.jpg" alt="" />
                <p>OnePlus Watch 3</p>
                <h2 style={{color:"salmon"}}>₹2799</h2>
                                <button onClick={() => buy("OnePlus Watch 3", "₹2799", "onepluswatch.jpg")}>
                            Buy Now
                </button>

            </div>
            <div>
                <img src="honor-watch-5-ultra.jpg" alt="" />
                <p>Honor Watch 5 Ultra </p>
                <h2 style={{color:"salmon"}}>₹1899</h2>
                <button onClick={() => buy("Honor Watch 5 Ultra", "₹1899", "honor-watch-5-ultra.jpg")}>
                            Buy Now
                </button>

            </div>
            <div>
                <img src="huawei-watch-gt-5-pro.jpg" alt="" />
                <p>Huawei Watch GT 5 Pro</p>
                <h2 style={{color:"salmon"}}>₹1599</h2>
                <button onClick={() => buy("Huawei Watch GT 5 Pro", "₹1599", "huawei-watch-gt-5-pro.jpg")}>
                            Buy Now
                </button>
            </div>
            <div>
                <img src="xiaomi-watch-s4.jpg" alt="" />
                <p>Xiaomi Watch S4</p>
                <h2 style={{color:"salmon"}}>₹999</h2>
                <button onClick={() => buy("Xiaomi Watch S4", "₹999", "xiaomi-watch-s4.jpg")}>
                            Buy Now
                </button>
            </div>
            <div>
                <img src="samsung-galaxy-watch-fe.jpg" alt="" />
                <p>Samsung Galaxy Watch FE </p>
                <h2 style={{color:"salmon"}}>₹2999</h2>
                <button onClick={() => buy("Samsung Galaxy Watch FE ", "₹2999", "samsung-galaxy-watch-fe.jpg")}>
                            Buy Now
                </button>

            </div>
            <div>
                <img src="apple-watch-series10.jpg" alt="" />
                <p>Apple Watch Series 10 </p>
                <h2 style={{color:"salmon"}}>₹7999</h2>
                <button onClick={() => buy("Apple Watch Series 10", "₹7999", "apple-watch-series10.jpg")}>
                            Buy Now
                </button>

            </div>
            </div>
            <br />
            <div className="color"></div>
            <h3>Best Deals on Smartphones</h3>
            <div id="shadow" className="container">
            <div>
                <img src="iphone16promax.jpg" alt="" />
                <p>Apple iPhone 16 Pro Max</p>
                <h2 style={{color:"salmon"}}>₹85999</h2>
                <button onClick={() => buy("Apple iPhone 16 Pro Max", "₹85999", "iphone16promax.jpg")}>
                            Buy Now
                </button>
            </div>
            <div>
                <img src="galaxya56.jpg" alt="" />
                <p>Samsung Galaxy A56</p>
                <h2 style={{color:"salmon"}}>₹54999</h2>
                <button onClick={() => buy("Samsung Galaxy A56", "₹54999", "galaxya56.jpg")}>
                            Buy Now
                </button>
            </div>
            <div>
                <img src="tecno40premier.jpg" alt="" />
                <p>Tecno Camon 40 Premier</p>
                <h2 style={{color:"salmon"}}>₹34999</h2>
                <button onClick={() => buy("Tecno Camon 40 Premier", "₹34999", "tecno40premier.jpg")}>
                            Buy Now
                </button>
            </div>
            <div>
                <img src="edge50pro.jpg" alt="" />
                <p>Motorola Edge 50 Pro</p>
                <h2 style={{color:"salmon"}}>₹14999</h2>
                <button onClick={() => buy("Motorola Edge 50 Pro", "₹14999", "edge50pro.jpg")}>
                            Buy Now
                </button>
            </div>
            <div>
                <img src="xiaomi15ultra.jpg" alt="" />
                <p>Xiaomi 15 Ultra</p>
                <h2 style={{color:"salmon"}}>₹17999</h2>
                <button onClick={() => buy("Xiaomi 15 Ultra", "₹17999", "xiaomi15ultra.jpg")}>
                            Buy Now
                </button>
            </div>
            <div>
                <img src="oneplus13r.jpg" alt="" />
                <p>OnePlus 13R </p>
                <h2 style={{color:"salmon"}}>₹27999</h2>
                <button onClick={() => buy("OnePlus 13R", "₹27999", "oneplus13r.jpg")}>
                            Buy Now
                </button>
            </div>
            </div>
        </section>
        <div>
            <video onClick={() => navigate("/Fashion")} style={{ cursor: "pointer" }} src="fashion.mp4" loop width="100%" autoPlay muted />
        </div>
        <section id="pick">
        <h2>Fashion's Top Picks</h2>
            <div className="container">
                <div className="item">
                    <div>
                        <div>
                        <img src="coat.png" alt="" />
                        <span>Coat
                        &nbsp;
                <h2 style={{color:"salmon"}}>₹1249</h2>
                <button onClick={() => buy("Coat", "₹1249", "coat.png")}>
                            Buy Now
                </button>

                        </span>
                        </div>
                        <div>
                        <img src="sherwani.png" alt="" />
                        <span>Sherwani&nbsp;
                <h2 style={{color:"salmon"}}>₹1399</h2>
                <button onClick={() => buy("Sherwani", "₹1399", "sherwani.png")}>
                            Buy Now
                </button>
                        </span>
                        </div>
                    </div>
                    <div>
                        <div>
                        <img src="shirt.png" alt="" />
                        <span>Shirt
                        &nbsp;
                <h2 style={{color:"salmon"}}>₹699</h2>
                <button onClick={() => buy("Shirt", "₹699", "shirt.png")}>
                            Buy Now
                </button>

                        </span>
                        </div>
                        <div>
                        <img src="jacket.png" alt="" />
                        <span>Jacket
                        &nbsp;
                <h2 style={{color:"salmon"}}>₹799</h2>
                <button onClick={() => buy("Jacket", "₹799", "jacket.png")}>
                            Buy Now
                </button>
                        </span>
                        </div>
                    </div>
                    <div className='media'>
                        <div>
                        <img src="kurta.png" alt="" />
                        <span>Kurta
                        &nbsp;
                <h2 style={{color:"salmon"}}>₹999</h2>
                <button onClick={() => buy("Kurta", "₹999", "kurta.png")}>
                Buy Now
                </button>
                        </span>
                        </div>
                        <div>
                        <img src="women.png" alt="" />
                        <span>Lehnga&nbsp;
                <h2 style={{color:"salmon"}}>₹1299</h2>
                <button onClick={() => buy("Lehnga", "₹1299", "woment.png")}>
                            Buy Now
                </button></span>
                        </div>
                    </div>
                </div>
                <div className="fashion"> 
                    <div id='animation'></div>
                
                    <div className="overlay">

                    </div>
                    
                    <h2>
                    <marquee behavior="scroll" direction="left" scrollamount="6">
                        <span>Shop Your Fashion Needs</span> &nbsp; | &nbsp; Latest and Trending Choices Available!
                    </marquee>

                    </h2>
                    <button onClick={() => navigate("/Fashion")} style={{ cursor: "pointer" }}>Shop Now</button>
                </div>
            </div>
        </section>
        <div className="color"></div>

           <section id="product">
            <div className="container">
                <div className="content" onClick={() => navigate("/Fashion")} style={{ cursor: "pointer" }}>  
                    <div>
                        <h2>From ₹199</h2>
                        <p>Sale is Live</p>
                    </div>
                    <div>
                    <img src="cloth.png" alt="" />
                    </div>
                </div>
                <div className="content" onClick={() => navigate("/Shoes")} style={{ cursor: "pointer" }}>  
                    <div>
                        <h2>Min.30% Off</h2>
                        <p>Deals on Shoes</p>
                    </div>
                    <div>
                    <img src="shoes.png" alt="" />
                    </div>
                </div>
                <div className="content" onClick={() => navigate("/Fashion")} style={{ cursor: "pointer" }}>  
                    <div>
                        <h2>50-80% Off</h2>
                        <p>Kid's Dresses</p>
                    </div>
                    <div>
                    <img id='inc' src="womens.png" alt="" />

                    </div>
                </div>
            </div>
            <div className="container">
            <div className="content" onClick={() => navigate("/Laptop")} style={{ cursor: "pointer" }}>  
                    <div>
                        <h2>Best Selling Laptops</h2>
                        <p>New Balance & More Savings are here</p>
                    </div>
                    <div>
                    <img src="laptops.png" alt="" />
                    </div>
                </div>
                <div className="content" onClick={() => navigate("/Fashion")} style={{ cursor: "pointer" }}>  
                    <div>
                        <h2>New Fashion</h2>
                        <p>T-Shirt, Shirts, Jeans...</p>
                    </div>
                    <div>
                    <img src="fashions.png" alt="" />
                    </div>
                </div>
                <div className="content" onClick={() => navigate("/Mobile")} style={{ cursor: "pointer" }}>  
                    <div>
                        <h2>Summer Essentials</h2>
                        <p>Popular Brands</p>
                    </div>
                    <div>
                    <video  src="v.mp4" loop width="150%" autoPlay muted />

                    </div>
                </div>
            </div>
        </section>
        <div className="color"></div>

        </>
    )
}
export default Home