import { FaShoppingCart, FaBatteryFull, FaMobileAlt, FaMemory, FaSdCard } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Watch() {
  const navigate = useNavigate();

  function buy(name, price, image) {
    const isLogin = localStorage.getItem("isLogin") === "true";
    if (isLogin) {
      localStorage.setItem("product", JSON.stringify({ name, price, image }));
      navigate("/Buy");
    } else {
      alert("Please Login First");
      navigate("/login");
    }
  }

  function addToCart(name, price, image) {
    const isLogin = localStorage.getItem("isLogin") === "true";
    const user = JSON.parse(localStorage.getItem("userData"));

    if (!isLogin || !user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    const email = user.email;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(item => item.name === name && item.email === email);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: Date.now(),
        name,
        productName: name,
        productPrice: price,
        productImage: image,
        quantity: 1,
        email
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
  }

    const products = [
      {
        brand: "Watches",
        items: [
          {
            name: "iPhone 15 Pro Max",
            image: "apple-watch-series10.jpg",
            price: 39999,
            oldPrice: 59999,
            discount: "38%",
            display: { icon: <FaMobileAlt />, value: "1.96 Display Size 496x416 pixels Resolution" },
            storage: { icon: <FaSdCard />, value: "64GB storage, no card slot" },
            ram: { icon: <FaMemory />, value: "Apple S10 Ram" },
            battery: { icon: <FaBatteryFull />, value: "327mAh Battery" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "OnePlus Watch 3",
            image: "oneplus-watch-3-1.jpg",
            price: 999,
            oldPrice: 54999,
            discount: "50%",
            display: { icon: <FaMobileAlt />, value: "1.5 Display Size 466x466 pixels Resolution" },
            storage: { icon: <FaSdCard />, value: "32GB storage, no card slot" },
            ram: { icon: <FaMemory />, value: "2GB RAM Snapdragon W5 Gen Ram" },
            battery: { icon: <FaBatteryFull />, value: "648mAh Battery" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Xiaomi Watch S4",
            image: "xiaomi-watch-s4-1.jpg",
            price: 49999,
            oldPrice: 44999,
            discount: "85%",
            display: { icon: <FaMobileAlt />, value: "1.43 Display Size 466x466 pixels Resolution"},         storage: { icon: <FaSdCard />, value: "no card slot" },
            storage: { icon: <FaSdCard />, value: "32GB storage, no card slot" },
            ram: { icon: <FaMemory />, value: "2GB RAM Snapdragon W5 Gen Ram" },
            battery: { icon: <FaBatteryFull />, value: "486mAh Battery" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Samsung Galaxy Watch7",
            image: "samsung-galaxy-watch7-1.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "25%",
            display: { icon: <FaMobileAlt />, value: "1.5 Display Size 480x480 pixels Resolution"},         storage: { icon: <FaSdCard />, value: "no card slot" },
            storage: { icon: <FaSdCard />, value: "32GB storage, no card slot" },
            ram: { icon: <FaMemory />, value: "2GB RAM Exynos W1000Ram" },
            battery: { icon: <FaBatteryFull />, value: "425mAh Battery" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Rolex Golden Analog Watch",
            image: "rolex.png",
            price: 59999,
            oldPrice: 64999,
            discount: "88%",
            display: { icon: <FaMobileAlt />, value: "1.5 Display Size 480x480 pixels Resolution"},         storage: { icon: <FaSdCard />, value: "no card slot" },
            storage: { icon: <FaSdCard />, value: "32GB storage, no card slot" },
            ram: { icon: <FaMemory />, value: "2GB RAM Exynos W1000Ram" },
            battery: { icon: <FaBatteryFull />, value: "425mAh Battery" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Rolex Diamond Audemars Piguet Watch",
            image: "rolexdiamond.png",
            price: 59999,
            oldPrice: 44999,
            discount: "71%",
            display: { icon: <FaMobileAlt />, value: "1.5 Display Size 480x480 pixels Resolution"},         storage: { icon: <FaSdCard />, value: "no card slot" },
            storage: { icon: <FaSdCard />, value: "32GB storage, no card slot" },
            ram: { icon: <FaMemory />, value: "2GB RAM Exynos W1000" },
            battery: { icon: <FaBatteryFull />, value: "425mAh Battery" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Rolex Daytona Analog Watch",
            image: "daytona.png",
            price: 59999,
            oldPrice: 14999,
            discount: "58%",
            display: { icon: <FaMobileAlt />, value: "1.5 Display Size 480x480 pixels Resolution"},         storage: { icon: <FaSdCard />, value: "no card slot" },
            storage: { icon: <FaSdCard />, value: "32GB storage, no card slot" },
            ram: { icon: <FaMemory />, value: "2GB RAM Exynos W1000Ram" },
            battery: { icon: <FaBatteryFull />, value: "425mAh Battery" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "OnePlus Watch 2R",
            image: "oneplus-watch-2r-1.jpg",
            price: 9999,
            oldPrice: 24999,
            discount: "71%",
            display: { icon: <FaMobileAlt />, value: "1.43 Display Size 480x480 pixels Resolution"},         storage: { icon: <FaSdCard />, value: "no card slot" },
            storage: { icon: <FaSdCard />, value: "32GB storage, no card slot" },
            ram: { icon:"", value: "" },
            battery: { icon:"", value: "" },
            rating: 4.7,
            reviews: "5,432",
          },

        ],
      },
    ];
    return (
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <div className="banner">
              <img id="watchimg" src="watches.png" alt="Watches" />
              <h1>Introducing <span className="highlight">{product.brand}</span></h1>
              <p>Original Brand of Watches with <span className="highlight">Awesome Looks</span>.</p>
              <p>From ₹5,900*</p>
              <img id="sale" src="sale.png" alt="Sale" />
              <button onClick={() => buy(product.brand, "₹900", "shoe.png")}>
                            Buy Now
                </button>
            </div>
            <div className="color"></div>
            <div className="product-container">
              {product.items.map((item, itemIndex) => {
                const discountedPrice = (item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0);
                return (
                  <div key={itemIndex} className="card">
                    <div id="flex">
                      <div>
                        <img className="productimg" src={item.image} alt={item.name} />
                        <h3 className="highlight">{item.name}</h3>
                        <button onClick={() => addToCart(item.name, discountedPrice, item.image)}>
                          <FaShoppingCart /> Add to Cart
                        </button>
                        <button onClick={() => buy(item.name, `₹${discountedPrice}`, item.image)}>
                          <BsLightningFill /> Buy Now
                        </button>
                      </div>
                      <div>
                        <h5 className="highlight" style={{ fontSize: "30px" }}>
                          <s>₹{item.oldPrice}</s> ₹{discountedPrice} <br />
                          ({item.discount} OFF)
                        </h5>
                        <p>{item.display.icon} {item.display.value}</p>
                        <p>{item.storage.icon} {item.storage.value}</p>
                        <p>{item.ram.icon} {item.ram.value}</p>
                        <p>{item.battery.icon} {item.battery.value}</p>
                        <p>⭐ {item.rating} ({item.reviews})</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="color"></div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Watch;

