const Product = ({ id, title, description, price, thumbnail }) => {
    return {
        id: id ?? crypto.randomUUID(),
        title: title ?? "Brak nazwy",
        description: description ?? "Brak opisu",
        price: price ?? 0.0,
        thumbnail: thumbnail ?? "https://via.placeholder.com/150"
    };
};

export default Product;
