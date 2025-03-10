import { FaCalendarAlt, FaWeight, FaMobileAlt, FaMicrochip, FaMemory, FaSdCard, FaBatteryFull } from "react-icons/fa";


function Mobile() {
    const products = [
      {
        brand: "Apple",
        items: [
      //     {
      //       name: "Apple iPhone 13",
      //       storage: " (Starlight, 128 GB)",
      //       image: "iphone16.png", 
      //       price: 44999,
      //       oldPrice: 49900,
      //       discount: "9% off",
      //       rating: 4.6,
      //       reviews: "2,87,914",
      //     },
      //     {
      //       name: "Apple iPhone 16",
      //       storage:"(Teal, 128 GB)",
      //       image: "iphone16.png",
      //       price: 69999,
      //       oldPrice: 79900,
      //       discount: "12% off",
      //       rating: 4.6,
      //       reviews: "7,632",
      //     },
      //   ],
      // },
      // {
      //   brand: "Samsung",
      //   items: [
      //     {
      //       name: "SAMSUNG Galaxy F15 5G (Ash Black, 128 GB)",
      //       image: "iphone16.png",
      //       price: 18999,
      //       oldPrice: 20999,
      //       discount: "10% off",
      //       rating: 4.5,
      //       reviews: "1,10,324",
      //     },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            releaseDate: { icon: <FaCalendarAlt />, value: "Released 2025, March 10" },
            weight: { icon: <FaWeight />, value: "198g, 7.4mm thickness" },
            display: { icon: <FaMobileAlt />, value: "6.7-inch, 1080x2340 pixels" },
            os: { icon: <FaMicrochip />, value: "Android 15, One UI 7 (6 Major Upgrades)" },
            storage: { icon: <FaSdCard />, value: "128GB/256GB, No Card Slot" },
            camera: { icon: <FaMemory />, value: "50MP, 2160p Recording" },
            ram: { icon: <FaMemory />, value: "8GB / 12GB RAM, Exynos 1580" },
            battery: { icon: <FaBatteryFull />, value: "5000mAh, 45W Fast Charging" },
            image: "iphone16.png",
            price: 59999,
            oldPrice: 64999,
            discount: "7% off",
            rating: 4.7,
            reviews: "5,432",
          },
        ],
      },
    ];
    return (
      <div>
        <div className="banner">
          <img src="iphone16.png" />
          <h1>Introducing <span className="highlight">iPhone 16</span></h1>
          <p>Supersized battery life. Built for <span className="highlight">Apple Intelligence</span>.</p>
          <p>From ₹52,900*</p>
          <button onClick={products.brand}>Buy Now</button>
        </div>
    {/* ==================== */}
        {products.map((product, index) => (
          <div key={index}>
            <div className="banner">
                <img src="iphone16.png" />
                <h1>Introducing <span className="highlight">iPhone 16{product.brand}</span></h1>
                <p>Supersized battery life. Built for <span className="highlight">Apple Intelligence</span>.</p>
                <p>From ₹52,900*</p>
                <button onClick={products.brand}>Buy Now</button>
          </div>
          <h2>{product.brand} Smartphones</h2>    
          <div  className="product-container">
              {product.items.map((item, itemIndex) => (
                <div key={itemIndex} className="card">
                  <img className="productimg" src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  {/* <p>₹{item.price}</p> */}
                  
                  <p><s>₹{item.oldPrice}</s> ₹{item.price} ({item.discount})</p>
                  <p>
                    <s>₹{item.oldPrice}</s> ₹{(item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0)} 
                    ({item.discount} OFF)
                  </p>
                  <p>{item.display.icon}{ item.display.value}</p>
                  <p>⭐ {item.rating} ({item.reviews})</p>
                  <div><button>Buy Now</button>&nbsp;
                  <button>Add To Cart</button></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default Mobile