import { FaShoppingCart, FaCalendarAlt, FaWeight, FaMobileAlt, FaMicrochip, FaMemory, FaSdCard, FaBatteryFull } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Laptop() {
  let navigate=useNavigate()
    
function buy(productName, productPrice, productImage){
    if(localStorage.getItem("isLogin") === "true"){
      localStorage.setItem('product', JSON.stringify({ name: productName, price: productPrice, image: productImage }));

        // setProduct({ name: productName, price: productPrice, image: productImage }); // Set product details in state
        navigate("/Buy")
    }
    else{
        alert("Please Login First")
        navigate("/login")
    }
}

    const products = [
      {
        brand: "Laptops",
        items: [
          {
            name: "HP AMD Ryzen 5 Quad Core ",
            image: "hp.png",
            price: 39999,
            oldPrice: 56999,
            discount: "25%",
            display: { icon: <FaMobileAlt />, value: "1920 x 1080 Pixel Full HD, micro-edge, anti-glare, 250 nits, 45% NTSC Display" },
            storage: { icon: <FaSdCard />, value: "512 GB SSD Storage" },
            ram: { icon: <FaMemory />, value: "16 GB Ram LPDDR5" },
            battery: { icon: <FaBatteryFull />, value: "45W AC Adapter" },
            processor: {icon: <FaSdCard/>, value:"AMD Ryzen 5 Quad Core Processor"},
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Lenovo IdeaPad Slim 3 ",
            image: "lenovo.jpg",
            price: 39999,
            oldPrice: 72789,
            discount: "39%",
            display: { icon: <FaMobileAlt />, value: "1920 x 1080 Pixel Full HD LCD Display" },
            storage: { icon: <FaSdCard />, value: "512 GB SSD Storage" },
            ram: { icon: <FaMemory />, value: "16 GB Ram LPDDR4X" },
            battery: { icon: <FaBatteryFull />, value: "65W Round Tip (3 Pin) Power Supply" },
            processor: {icon: <FaSdCard/>, value:"AMD Ryzen 5 Quad Core"},
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "SAMSUNG Galaxy Book4 ",
            image: "galxybook4.png",
            price: 39999,
            oldPrice: 82789,
            discount: "31%",
            display: { icon: <FaMobileAlt />, value: "1920 x 1080 Pixel Full HD LCD Display" },
            storage: { icon: <FaSdCard />, value: "512 GB SSD Storage" },
            ram: { icon: <FaMemory />, value: "16 GB Ram LPDDR4X" },
            battery: { icon: <FaBatteryFull />, value: "45W AC Adapter" },
            processor: {icon: <FaSdCard/>, value:"Intel Core 5 13th Generation"},
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Apple MacBook AIR Apple M2 ",
            image: "apple.jpeg",
            price: 39999,
            oldPrice: 82789,
            discount: "28%",
            display: { icon: <FaMobileAlt />, value: "1920 x 1080 Pixel Full HD LCD Display" },
            storage: { icon: <FaSdCard />, value: "256 GB SSD Storage" },
            ram: { icon: <FaMemory />, value: "8 GB Ram" },
            battery: { icon: <FaBatteryFull />, value: "30 W USB-C Power Adapter" },
            processor: {icon: <FaSdCard/>, value:"Apple M2 Chip Processor"},
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "HP Pavilion Plus Laptop",
            image: "pavilion.png",
            price: 39999,
            oldPrice: 92789,
            discount: "23%",
            display: { icon: <FaMobileAlt />, value: "1920 x 1080 Pixel Full HD LCD Display" },
            storage: { icon: <FaSdCard />, value: "512 GB SSD Storage" },
            ram: { icon: <FaMemory />, value: "16 GB Ram LPDDR5X" },
            battery: { icon: <FaBatteryFull />, value: "51 Wh Li-ion Battery" },
            processor: {icon: <FaSdCard/>, value:"Intel Core 5 13th Generation"},
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "ASUS Zephyrus G16 ",
            image: "asus.png",
            price: 39999,
            oldPrice: 219999,
            discount: "5%",
            display: { icon: <FaMobileAlt />, value: "2560 x 1600 Pixel" },
            storage: { icon: <FaSdCard />, value: "1 TB SSD Storage" },
            ram: { icon: <FaMemory />, value: "32 GB Ram LPDDR4X" },
            battery: { icon: <FaBatteryFull />, value: "105 Watt Power Supply" },
            processor: {icon: <FaSdCard/>, value:"Intel Core i7 12th Generation"},
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
                <img id="watchimg" src="laps.png" />
                <h1>Introducing <span className="highlight">{product.brand}</span></h1>
                <p>Original Brand of Laptops with <span className="highlight">Awesome Features</span>.</p>
                <p>From ₹35,900*</p>
                <img id="sale" src="sale.png" alt="" />
                <button onClick={() => buy(product.brand, "₹52,900", "laps.png")}>
                            Buy Now
                </button>
          </div>
          <div className="color"></div>
          <div  className="product-container">
              {product.items.map((item, itemIndex) => (
                
                <div key={itemIndex} className="card">
                  <div id="flex">
                  <div>
                  <img className="laptopimg" src={item.image} alt={item.name} />
                  <h3 className="highlight">{item.name}</h3>
                  
                  <button> <FaShoppingCart /> Add To Cart</button>&nbsp;
                  <button onClick={() => buy(item.name, `₹${(item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0)}`, item.image)}>
                <BsLightningFill /> Buy Now
                </button>
                </div>&nbsp;
                  <div>
                  <h5 className="highlight" style={{fontSize:"30px"}}>
                    <s>₹{item.oldPrice}</s> ₹{(item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0)} <br />
                    ({item.discount} OFF)
                  </h5>
                  <p>{item.display.icon}{ item.display.value}</p>
                  <p>{item.storage.icon} {item.storage.value}</p>
                  <p>{item.ram.icon} {item.ram.value}</p>
                  <p>{item.processor.icon} {item.processor.value}</p>
                  <p>{item.battery.icon} {item.battery.value}</p>
                  <p>⭐ {item.rating} ({item.reviews})</p></div>
                </div>
                </div>
                
              ))}
            </div>
          <div className="color"></div>

          </div>
        ))}
      </div>
    );
  }
  export default Laptop