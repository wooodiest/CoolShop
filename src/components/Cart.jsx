import { useContext } from "react"; 
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Twój koszyk</h1>

            {cart.length === 0 ? (
                <p className="text-gray-600">Koszyk jest pusty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
