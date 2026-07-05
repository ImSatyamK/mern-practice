import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

export default function Home() {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <>
            <h1 className="text-2xl font-light text-gray-800 dark:text-white text-center">Current Products 🚀</h1>

            <section className="flex gap-4 ml-10 md:ml-10 flex-wrap justify-center mr-10 md:mr-10 mt-4">
                {products.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })}
            </section>

            {products.length === 0 && (
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <h1 className="text-2xl font-medium text-gray-800 dark:text-white text-center">No products Found</h1>
                    <Link to="/create" className="text-center text-blue-500 mt-4 block">
                        Create a new product
                    </Link>
                </div>
            )}
        </>
    )
}