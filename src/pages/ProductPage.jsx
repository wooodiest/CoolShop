import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Button } from "flowbite-react";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        setClicked(true);
        addToCart(product);

        setTimeout(() => {
            setClicked(false);
        }, 500);
    };

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Ładowanie...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
            <header className="w-full bg-white shadow-md py-4 text-center">
                <h1 className="text-3xl font-semibold text-gray-900">{product.title}</h1>
            </header>

            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 mt-8">
                <div className="flex flex-col lg:flex-row">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full lg:w-1/3 h-96 object-cover rounded-lg mb-6 lg:mb-0"
                    />
                    <div className="lg:ml-8 lg:w-2/3">
                        <p className="text-xl font-semibold text-gray-900">{product.price} zł</p>
                        <p className="text-sm text-gray-500">
                            <strong>Marka:</strong> {product.brand} | <strong>SKU:</strong> {product.sku}
                        </p>
                        <p className="mt-2 text-lg text-gray-700">{product.description}</p>
                        <p className="mt-2 text-sm text-gray-600">
                            <strong>Dostępność:</strong> {product.availabilityStatus}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                            <strong>Ocena:</strong> ⭐ {product.rating} / 5
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                            <strong>Rabat:</strong> {product.discountPercentage}%
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                            <strong>Polityka zwrotów:</strong> {product.returnPolicy}
                        </p>

                        <Button 
                            className={`mt-6 w-full transform transition-all duration-300 ${clicked ? "bg-green-500 scale-95" : "bg-blue-500 hover:bg-blue-600 scale-105"}`}
                            onClick={handleAddToCart} 
                            size="lg"
                        >
                            {clicked ? "Dodano do koszyka!" : "Dodaj do koszyka"}
                        </Button>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">Opinie klientów</h2>
                    {product.reviews && product.reviews.length > 0 ? (
                        <div className="mt-4 space-y-4">
                            {product.reviews.map((review, index) => (
                                <div key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50">
                                    <p className="text-gray-700"><strong>{review.reviewerName}</strong> ⭐ {review.rating}/5</p>
                                    <p className="text-gray-600 text-sm">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 mt-2">Brak opinii o tym produkcie.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
