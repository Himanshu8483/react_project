import { FaShoppingCart, FaCalendarAlt, FaWeight, FaMobileAlt, FaMicrochip, FaMemory, FaSdCard, FaBatteryFull } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Fashion() {
// function Fashion({setProduct}) {
  let navigate = useNavigate()
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

    const products = [
      {
        brand: "Fashion For Men",
        img:"kurta.png",
        rs:"199",
        items: [
          {
            name: "Lymio Men Cargo Pant ",
            image: "pant.jpg",
            oldPrice: 999,
            discount: "25%",
            material: "Cotton",
            length: "Full Length None",
            style: "Cargo",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Leriya Fashion T-Shirt ",
            image: "tshirt.jpg",
            oldPrice: 3999,
            discount: "51%",
            material: "COTTON LYCRA",
            length: "Half Sleeve",
            style: "Western",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Bellstone Men's Solid Regular Fit Kurta ",
            image: "kurta.jpg",
            oldPrice: 2999,
            discount: "61%",
            material: "Cotton",
            length: "Full Length None",
            style: "Cargo",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Ben Martin Men's Slim Fit Shirt",
            image: "shirtj.jpg",
            oldPrice: 2999,
            discount: "66%",
            material: "Cotton",
            length: "Full Length None",
            style: "Cargo",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Ben Martin Men's Loose Baggy Pant",
            image: "jean.jpg",
            oldPrice: 3999,
            discount: "54%",
            material: "Cotton",
            length: "Full Length None",
            style: "Cargo",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Arrow Breasted Slim Blazers ",
            image: "coats.jpg",
            oldPrice: 56999,
            discount: "25%",
            material: "Cotton",
            length: "Full Length None",
            style: "Cargo",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
         
        ],
      },
      {
        brand: "Fashion For Women",
        img:"fashion.png",
        rs:"1999",
        items: [
          {
            name: "Women's dress with Accessories",
            image: "wom1.png",
            oldPrice: 3499,
            discount: "21%",
            material: "100% Cotton",
            length: "Calf Length",
            style: "Regular",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "T-shirt Slipper Birken Cloths with Accessories",
            image: "wom2.png",
            oldPrice: 4999,
            discount: "33%",
            material: "100% Cotton",
            length: "Calf Length",
            style: "Regular",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Lymio Men Cargo Pant ",
            name: "Women's skirt, women Accessories",
            image: "wom3.png",
            oldPrice: 5499,
            discount: "25%",
            material: "100% Cotton",
            length: "Calf Length",
            style: "Regular",
            occasion: "Casual",
            rating: 4.7,
            reviews: "5,432",
          },
          {
            name: "Fashion Clothing Shirt Skirt Dress with Accessories",
            image: "wom4.png",
            oldPrice: 9999,
            discount: "65%",
            material: "100% Cotton",
            length: "Calf Length",
            style: "Regular",
            occasion: "Casual",
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
                <img id="fashionimg" src={product.img} />
                <h1>Introducing <span className="highlight">{product.brand}</span></h1>
                <p>Original Brand of Laptops with <span className="highlight">Awesome Features</span>.</p>
                <p>From ₹{product.rs}*</p>
                <img id="sale" src="sale.png" alt="" />
                <button onClick={() => buy(product.brand, product.rs, product.img)}>
                            Buy Now
                </button>
          </div>
          <div className="color"></div>
          <div  className="product-container">
              {product.items.map((item, itemIndex) => (
                
                <div key={itemIndex} className="card">
                  <div id="flex">
                  <div>
                  <img className="fashionimg" src={item.image} alt={item.name} /><br /><br />
                  <button> <FaShoppingCart /> Add To Cart</button>&nbsp;
                  <button onClick={() => buy(item.name, `₹${(item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0)}`, item.image)}>
                <BsLightningFill /> Buy Now
                </button>
              </div>&nbsp;
                  <div>
                  <h5 style={{fontWeight:"bold"}}>{item.name}</h5>
                  

                  <h5 className="highlight" style={{fontSize:"30px"}}>
                    <s>₹{item.oldPrice}</s> ₹{(item.oldPrice - (item.oldPrice * parseInt(item.discount) / 100)).toFixed(0)} <br />
                    ({item.discount} OFF)
                  </h5>
                  <p><strong>Material Type: </strong>{item.material}</p>
                  <p><strong>Length: </strong>{item.length}</p>
                  <p><strong>Style: </strong>{item.style}</p>
                  <p><strong>Occasion type: </strong>{item.occasion}</p>
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
  export default Fashion