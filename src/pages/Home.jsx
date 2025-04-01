import ProductList from "../components/ProductList";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
            <header className="w-full bg-white shadow-md py-8 text-center">
                <h1 className="text-4xl font-semibold text-gray-900">Witaj w naszym Sklepie 🛒</h1>
                <p className="mt-2 text-xl text-gray-600">Najlepsze produkty w najniższych cenach!</p>
            </header>

            <section className="w-full px-4 py-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Nasze Produkty</h2>
                <p className="mb-6 text-lg text-gray-700">Znajdź najlepsze oferty w naszej szerokiej ofercie produktów. Wybierz to, czego potrzebujesz!</p>
                
                <ProductList />
            </section>

            <footer className="w-full bg-white text-center py-4 mt-auto shadow-md">
                <p className="text-sm text-gray-600">© 2025 Fajowy Sklepik. Wszystkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
};

export default Home;
