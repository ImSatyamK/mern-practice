import { useEffect } from "react";
import { useProductStore } from "../store/product";

export default function Home(){
    const {fetchProducts, products} = useProductStore();

    useEffect(()=>{
        fetchProducts()
    }, [fetchProducts])

    return (
        <>
        {products.map(product => {
            return (
            <div key={product._id}>
                <img src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <h5>{product.price}</h5>
            </div>
            )
        })}
        </>
    )
}