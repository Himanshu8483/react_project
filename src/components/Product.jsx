import { useNavigate } from "react-router-dom";

function Product() {
    const navigate = useNavigate();

    function buy() {
        // Save product details before navigating to Buy page
        const productDetails = {
            name: "Honor Watch 5 Ultra",
            price: "₹1899",
            image: "honor-watch-5-ultra.jpg",
        };

        localStorage.setItem("selectedProduct", JSON.stringify(productDetails));

        // Navigate to Buy page
        navigate("/buy");
    }

    return (
        <div>
            <img src="honor-watch-5-ultra.jpg" alt="" />
            <p>Honor Watch 5 Ultra </p>
            <h2 style={{ color: "salmon" }}>₹1899</h2>
            <button onClick={buy}>Buy Now</button>
        </div>
    );
}

export default Product;
