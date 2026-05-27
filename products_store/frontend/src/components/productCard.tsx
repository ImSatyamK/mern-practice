import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useProductStore } from "../store/product";
import { useState } from "react";

export default function ProductCard({ product }: { product: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const { setNotification } = useProductStore();
    const { updateProduct, deleteProduct } = useProductStore();
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleUpdate = async (pid: string, updatedData: any) => {
        setIsOpen(false);
        setUpdatedProduct(updatedData);
        const response = await updateProduct(pid, updatedData);
        setNotification(response.message, response.success);
    };

    const handleDelete = async (pid: string) => {
        const response = await deleteProduct(pid)
        setNotification(response.message, response.success);
    }

    return (
        <div
            key={product._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover"
            />
            <h5 className="text-small font-light text-gray-800 dark:text-white text-center">
                {product.name}
            </h5>
            <h5 className="text-small font-light text-gray-800 dark:text-white text-center">
                ${product.price}
            </h5>
            <div className="flex gap-2 mt-2 justify-center">
                <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                    <FiEdit />
                </button>
                <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
                    <AiOutlineDelete />
                </button>
            </div>
            {isOpen && (
               <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-md w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdate(product._id, updatedProduct);
                        }}>
                        <h2 className="text-2xl font-light text-gray-800 dark:text-white text-center">Update Product</h2>
                        <div className="mb-4 flex flex-col text-center">
                            <label>Name:</label>
                            <input
                                className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="text"
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-4 flex flex-col text-center">
                            <label>Price:</label>
                            <input
                                className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="number"
                                step="any"
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: parseFloat(e.target.value) })}
                            />
                        </div>
                        <div className="mb-4 flex flex-col text-center">
                            <label>Image URL:</label>
                            <input

                                className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="text"
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </div>
                        <div className="flex gap-4 justify-center mt-4">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                                Update
                            </button>
                            <button onClick={() => setIsOpen(false)} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded cursor-pointer">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}