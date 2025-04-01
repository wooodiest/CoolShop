import { Link } from "react-router-dom";
import { useContext, useState } from "react"; 
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [clicked, setClicked] = useState(false);

    const handleAddToCart = () => {
        setClicked(true);
        addToCart(product);

        setTimeout(() => {
            setClicked(false);
        }, 500); 
    };

    return (
        <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2 text-center">{product.title}</h2>
            <p className="text-gray-600 text-sm text-center">{product.description}</p>
            <p className="text-green-500 font-bold mt-2">{product.price} zł</p>

            <Link to={`/product/${product.id}`} className="text-blue-500 hover:text-blue-700 mt-4">
                Zobacz szczegóły
            </Link>

            <button 
                onClick={handleAddToCart}
                className={`px-4 py-2 mt-3 rounded-lg w-full transform transition-all duration-300 
                    ${clicked ? "bg-green-500 scale-95" : "bg-blue-500 hover:scale-105 hover:bg-blue-600"}
                    text-white font-semibold`}
            >
                {clicked ? "Dodano!" : "Dodaj do koszyka"}
            </button>
        </div>
    );
};

export default ProductCard;
