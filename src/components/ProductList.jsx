import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Product from "../models/Product";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                const formattedProducts = data.products.map(prod => Product(prod)); 
                setProducts(formattedProducts);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
