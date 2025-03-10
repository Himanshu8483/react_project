import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();

    const images = ["fas1.jpg", "fas2.jpg", "fas3.jpg", "fas4.png", "fas5.png"]; 
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    
      return () => clearInterval(interval);
    }, []);
    return(
        <>
        <section id="hero">
            <div className="container">
                <div onClick={() => navigate("/mobile")} style={{ cursor: "pointer" }}>
                <img src="mobile.png" alt="Mobile" />
                <h3>Mobiles</h3>
                </div>
                <div>
                    <img src="fashion.png" alt="" />
                    <h3>Fashion</h3>
                </div>
                <div>
                    <img src="watch.png" alt="" />
                    <h3>Watches</h3>
                </div>
                <div>
                    <img src="laptop.png" alt="" />
                    <h3>laptops</h3>
                </div>
                <div>
                    <img src="shoes.png" alt="" />
                    <h3>Shoes</h3>
                </div>
            </div>
            </section>
            <section>
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="banner.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                            {/* <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="banner2.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
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

            <div className="container">
            <div>
                <img src="onepluswatch.jpg" alt="" />
                <p>OnePlus Watch 3</p>
            </div>
            <div>
                <img src="honor-watch-5-ultra.jpg" alt="" />
                <p>Honor Watch 5 Ultra </p>
            </div>
            <div>
                <img src="huawei-watch-gt-5-pro.jpg" alt="" />
                <p>Huawei Watch GT 5 Pro</p>
            </div>
            <div>
                <img src="xiaomi-watch-s4.jpg" alt="" />
                <p>Xiaomi Watch S4</p>
            </div>
            <div>
                <img src="samsung-galaxy-watch-fe.jpg" alt="" />
                <p>Samsung Galaxy Watch FE </p>
            </div>
            <div>
                <img src="apple-watch-series10.jpg" alt="" />
                <p>Apple Watch Series 10 </p>
            </div>
            </div>
            <br />
            <div className="color"></div>
            <h3>Best Deals on Smartphones</h3>
            <div className="container">
            <div>
                <img src="iphone16promax.jpg" alt="" />
                <p>Apple iPhone 16 Pro Max</p>
            </div>
            <div>
                <img src="galaxya56.jpg" alt="" />
                <p>Samsung Galaxy A56</p>
            </div>
            <div>
                <img src="tecno40premier.jpg" alt="" />
                <p>Tecno Camon 40 Premier</p>
            </div>
            <div>
                <img src="edge50pro.jpg" alt="" />
                <p>Motorola Edge 50 Pro</p>
            </div>
            <div>
                <img src="xiaomi15ultra.jpg" alt="" />
                <p>Xiaomi 15 Ultra</p>
            </div>
            <div>
                <img src="oneplus13r.jpg" alt="" />
                <p>OnePlus 13R </p>
            </div>
            </div>
        </section>
        <div>
            <video  src="fashion.mp4" loop width="100%" autoPlay muted />
        </div>
        <section id="pick">
        <h2>Fashion's Top Picks</h2>
            <div className="container">
                <div className="item">
                    <div>
                        <div>
                        <img src="coat.png" alt="" />
                        <h5>Coat</h5>
                        </div>
                        <div>
                        <img src="sherwani.png" alt="" />
                        <h5>Sherwani</h5>
                        </div>
                    </div>
                    <div>
                        <div>
                        <img src="shirt.png" alt="" />
                        <h5>Shirt</h5>
                        </div>
                        <div>
                        <img src="jacket.png" alt="" />
                        <h5>Jacket</h5>
                        </div>
                    </div>
                    <div>
                        <div>
                        <img src="kurta.png" alt="" />
                        <h5>Kurta</h5>
                        </div>
                        <div>
                        <img src="women.png" alt="" />
                        <h5>Kurti and Lehnga</h5>
                        </div>
                    </div>
                </div>
                <div className="fashion">
                <img src={images[currentIndex]} alt="Fashion" />
                    <div className="overlay"></div>
                    
                    <h2>
                    <marquee behavior="scroll" direction="left" scrollamount="6">
                        <span>Shop Your Fashion Needs</span> &nbsp; | &nbsp; Latest and Trending Choices Available!
                    </marquee>

                    </h2>
                    <button>Shop Now</button>
                </div>
            </div>
        </section>
        <div className="color"></div>

           <section id="product">
            <div className="container">
                <div className="content">
                    <div>
                        <h2>From ₹199</h2>
                        <p>Sale is Live</p>
                    </div>
                    <div>
                    <img src="cloth.png" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h2>Min.30% Off</h2>
                        <p>Deals on Shoes</p>
                    </div>
                    <div>
                    <img src="shoes.png" alt="" />
                    </div>
                </div>
                <div className="content">
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
                <div className="content">
                    <div>
                        <h2>Best Selling Laptops</h2>
                        <p>New Balance & More Savings are here</p>
                    </div>
                    <div>
                    <img src="laptops.png" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h2>New Fashion</h2>
                        <p>T-Shirt, Shirts, Jeans...</p>
                    </div>
                    <div>
                    <img src="fashions.png" alt="" />
                    </div>
                </div>
                <div className="content">
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