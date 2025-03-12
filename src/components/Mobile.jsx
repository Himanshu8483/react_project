import { FaShoppingCart, FaCalendarAlt, FaWeight, FaMobileAlt, FaMicrochip, FaMemory, FaSdCard, FaBatteryFull } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";

function Mobile() {
    const products = [
      {
        brand: "Apple",
        image: "iphone16.png",
        items: [
          {
            name: "iPhone 15 Pro Max",
            image: "apple-iphone-15-pro-max-1.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "8%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Apple iPhone 16 Plus",
            image: "apple-iphone-16-plus-1.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Apple iPhone 16 Pro Max",
            image: "apple-iphone-16-pro-max-1.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Apple iPhone 16e",
            image: "apple-iphone-16e-1.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
        ],
      },
      {  
        brand: "Samsung",
        image:"sam.png",
        items: [
          {
            name: "Galaxy A56",
            image: "samsung-galaxy-a56-1.jpg",
            price: 59999,
            oldPrice: 69999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Galaxy A36",
            image: "samsung-galaxy-a36-1.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Galaxy A26",
            image: "samsung-galaxy-a26-1.jpg",
            price: 59999,
            oldPrice: 73999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Galaxy S25 Plus",
            image: "samsung-galaxy-s25-plus-sm-s936-1.jpg",
            price: 59999,
            oldPrice: 68999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
        ],
      },
      {
        brand: "OnePlus",
        image: "one.png",
        items: [
          {
            name: "",
            image: "oneplus-open-2.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "",
            image: "oneplus-nord-n30-se-5g-2.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "OnePlus 13",
            image: "oneplus-13-1.jpg",
            price: 69999,
            oldPrice: 64999,
            discount: "7%",
            display: { icon: <FaMobileAlt />, value: "210g or 213g, 8.5mm thickness" },
            storage: { icon: <FaSdCard />, value: "1TB storage, no card slot" },
            camera: { icon: <FaMemory />, value: "6.82 1440x3168 pixels" },
            ram: { icon: <FaMemory />, value: "12-24GB RAM Snapdragon 8 Elite" },
            battery: { icon: <FaBatteryFull />, value: "6000mAh 100W50W Fast Charging" },
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "OnePlus Ace 5 Pro",
            image: "oneplus-ace5-pro-1.jpg",
            price: 59999,
            oldPrice: 64999,
            discount: "8%",
            display: { icon: <FaMobileAlt />, value: "203g or 217g, 8.1mm thickness" },
            storage: { icon: <FaSdCard />, value: "256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "16GB RAM, Snapdragon 8 Elite" },
            battery: { icon: <FaBatteryFull />, value: "6100mAh, 100W Fast Charging" },
            rating: 4.8,
            reviews: "5,000",
          },
        ],
      }
    ];
    return (
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <div className="banner">
                <img id="img" src={product.image} />
                <h1>Introducing <span className="highlight">{product.brand}</span></h1>
                <p>Supersized battery life. Built for <span className="highlight">{product.brand} Intelligence</span>.</p>
                <p>From ₹52,900*</p>
                <img id="sale" src="sale.png" alt="" />
                <button>Buy Now</button>
          </div>
          <div className="color"></div>
          <div  className="product-container">
              {product.items.map((item, itemIndex) => (
                
                <div key={itemIndex} className="card">
                  <div id="flex">
                  <div>
                  <img className="productimg" src={item.image} alt={item.name} />
                  <h3 className="highlight">{item.name}</h3>
                  
                  <button> <FaShoppingCart /> Add To Cart</button>&nbsp;
                  <button> <BsLightningFill /> Buy Now</button></div>&nbsp;
                  <div>
                  <h5 className="highlight" style={{fontSize:"25px"}}>
                    <s>₹{item.oldPrice}</s> ₹{(item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0)} <br />
                    ({item.discount} OFF)
                  </h5>
                  <p>{item.display.icon}{ item.display.value}</p>
                  <p>{item.storage.icon} {item.storage.value}</p>
                  <p>{item.camera.icon} {item.camera.value}</p>
                  <p>{item.ram.icon} {item.ram.value}</p>
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
  export default Mobile