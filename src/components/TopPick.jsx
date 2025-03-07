import { useState, useEffect } from "react";

function TopPick(){
    
const images = ["fas1.jpg", "fas2.jpg", "fas3.jpg", "fas4.png", "fas5.png", "fas6.png"]; 
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
    return(
        <>
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
        </>
    )
}
export default TopPick