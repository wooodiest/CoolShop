import { Button } from "flowbite-react";
import { useContext } from "react"; 
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useContext(CartContext);

    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
            <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-16 h-16 object-cover rounded cursor-pointer"
                onClick={goToProductPage}
            />
            <div className="flex-1 ml-4">
                <h2 
                    className="text-lg font-semibold cursor-pointer text-blue-600 hover:underline"
                    onClick={goToProductPage}
                >
                    {item.title}
                </h2>
                <p className="text-gray-600">{item.price} zł</p>
            </div>
            <div className="flex items-center">
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-16 p-1 border rounded text-center"
                    min="1"
                />
                <Button className="ml-4" color="failure" onClick={() => removeFromCart(item.id)}>
                    Usuń
                </Button>
            </div>
        </div>
    );
};

export default CartItem;
