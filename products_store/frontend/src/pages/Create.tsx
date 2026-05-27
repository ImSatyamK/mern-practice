import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import { useState } from 'react';

export default function Create(){
    const { setNotification } = useProductStore();
    const { createProduct } = useProductStore();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await createProduct({ name, price: parseFloat(price), image });
        setNotification(response.message, response.success);
        setName('');
        setPrice('');
        setImage('');
    }
    const divStyle = "mb-4 flex flex-col text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow max-w-md mx-auto"
    const formStyle = "max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
    const inputStyle = "border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"

    return (
        <div>
            <h2 className="text-2xl font-light text-gray-800 dark:text-white text-center">Create Product</h2>
            <form onSubmit={handleSubmit} className={formStyle}>
                <div className={divStyle}>
                    <label>Name:</label>
                    <input className={inputStyle} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={divStyle}>
                    <label>Price:</label>
                    <input className={inputStyle} type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className={divStyle}>
                    <label>Image URL:</label>
                    <input className={inputStyle} type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="flex gap-4 justify-center mt-4">
                    <button type="submit" className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                        Create
                    </button>
                    <Link to="/" className="text-blue-500 px-4 py-3 rounded cursor-pointer bg-gray-200 dark:bg-gray-700">
                        Home
                    </Link>
                </div>
            </form>
        </div>
    );
}