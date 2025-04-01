import { useContext } from "react";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="mt-20 container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Twój koszyk</h1>

            {cart.length === 0 ? (
                <div className="text-center text-gray-600">
                    <p>Twój koszyk jest pusty.</p>
                    <button
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        onClick={() => navigate("/")}
                    >
                        Kontynuuj zakupy
                    </button>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <Cart />
                    </div>

                    <div className="lg:w-1/3 bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Podsumowanie</h2>
                        <div className="flex justify-between text-lg mb-2">
                            <span>Łączna wartość:</span>
                            <span className="font-bold">{getTotalPrice()} zł</span>
                        </div>
                        <div className="flex justify-between text-lg mb-2">
                            <span>Dostawa:</span>
                            <span className="font-bold">15 zł</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between text-xl font-bold">
                            <span>Suma:</span>
                            <span>{(parseFloat(getTotalPrice()) + 15).toFixed(2)} zł</span>
                        </div>
                        <button
                            className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
                            onClick={() => alert("Przejście do płatności")}
                        >
                            Przejdź do płatności
                        </button>
                        <button
                            className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
                            onClick={clearCart}
                        >
                            Wyczyść koszyk
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
