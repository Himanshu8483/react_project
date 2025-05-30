import { FaShoppingCart, FaCalendarAlt, FaWeight, FaMobileAlt, FaMicrochip, FaMemory, FaSdCard, FaBatteryFull } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Shoes() {
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
        brand: "Shoes",
        items: [
          {
            name: "Adidas Reflective M Running Shoe",
            image: "adidas.jpg",
            price: 39999,
            oldPrice: 4999,
            discount: "46%",
            material : "Ethylene Vinyl Acetate",
            closure : "Lace-Up",
            heel : "No Heel",
            resistance : "Not Water Resistant",
            sole : "Rubber",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Neeman's Sole Max Slip",
            image: "casual.jpg",
            price: 39999,
            oldPrice: 4999,
            discount: "64%",
            material : "Mesh",
            closure : "Pull-On",
            heel : "Flat",
            resistance : "Not Water Resistant",
            sole : "Ethylene Vinyl Acetate",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "FLYO by Lakhani Vardaan Pace Shoe",
            image: "lakhani.jpg",
            price: 39999,
            oldPrice: 7199,
            discount: "36%",
            material : "Ethylene Vinyl Acetate",
            closure : "Lace-Up",
            heel : "No Heel",
            resistance : "Not Water Resistant",
            sole : "Rubber",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Campus VIBGYOR Men's Lace-Up Shoe",
            image: "campus1.jpg",
            price: 39999,
            oldPrice: 6999,
            discount: "54%",
            material : "Ethylene Vinyl Acetate",
            closure : "Lace-Up",
            heel : "No Heel",
            resistance : "Not Water Resistant",
            sole : "Rubber",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "AVANT Men's BounceMax Walking Shoes",
            image: "avant.jpg",
            price: 39999,
            oldPrice: 3999,
            discount: "15%",
            material : "Ethylene Vinyl Acetate",
            closure : "Lace-Up",
            heel : "No Heel",
            resistance : "Not Water Resistant",
            sole : "Rubber",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Campus Mens Terminator Shoes",
            image: "campus.png",
            price: 39999,
            oldPrice: 3999,
            discount: "25%",
            material : "Ethylene Vinyl Acetate",
            closure : "Lace-Up",
            heel : "No Heel",
            resistance : "Not Water Resistant",
            sole : "Rubber",
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
                <img id="watchimg" src="shoe.png" />
                <h1>Introducing <span className="highlight">{product.brand}</span></h1>
                <p>Original Brand of Shoes with <span className="highlight">With Best Quality</span>.</p>
                <p>From ₹900*</p>
                <img id="sale" src="sale.png" alt="" />
                <button onClick={() => buy(product.brand, "₹900", "shoe.png")}>
                            Buy Now
                </button>
          </div>
          <div className="color"></div>
          <div  className="product-container">
          {product.items.map((item, itemIndex) => {
                const discountedPrice = (item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0);
                return (
                  <div key={itemIndex} className="card">
                  <div id="flex">
                  <div>
                  <img className="shoeimg" src={item.image} alt={item.name} /><br /><br />
                  <h3 className="highlight">{item.name}</h3>
                  <button onClick={() => addToCart(item.name, discountedPrice, item.image)}>
                          <FaShoppingCart /> Add to Cart
                        </button>
                  <button onClick={() => buy(item.name, `${discountedPrice}`, item.image)}>
                <BsLightningFill /> Buy Now
                </button></div>&nbsp;
                  <div>
                  <h5 className="highlight" style={{fontSize:"25px"}}>
                    <s>₹{item.oldPrice}</s> ₹{(item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0)} <br />
                    ({item.discount} OFF)
                  </h5>
                  <p><strong>Material type: </strong>{item.material}</p>
                  <p><strong>Closure type: </strong>{item.closure}</p>
                  <p><strong>Heel type: </strong>{item.heel}</p>
                  <p><strong>Restance: </strong>{item.resistance}</p>
                  <p><strong>Sole type: </strong>{item.sole}</p>
                  <p>⭐ {item.rating} ({item.reviews})</p></div>
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
  export default Shoes