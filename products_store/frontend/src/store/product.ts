import { create } from 'zustand'

type Product = {
    _id?: string,
    name: string,
    price: number,
    image: string,
    createdAt?: string,
    updatedAt?: string
}

type ProductStore = {
    products: Product[],
    setProducts: (newProducts: Product[]) => void,
    createProduct: (product: Product) => Promise<{
        success: boolean,
        message: any
    }>,
    fetchProducts: () => Promise<{
        success: boolean,
        message: any
    }>,
    updateProduct: (id: string, updated: Product) => Promise<{
        success: boolean,
        message: any
    }>,
    deleteProduct: (id: string) => Promise<{
        success: boolean;
        message: any;
    }>


}

export const useProductStore = create<ProductStore>((set)=>({
    products: [],

    setProducts: (newProducts: Product[]) => set({ products: newProducts }),

    createProduct: async (product: Product) => {
        if (!product.name ||!product.price || !product.image) {
            return {success: false, message: 'Please provide all fields.'}
        }

        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await response.json()
        if(!data.success) {
            return {success: false, message: data.message || "Failed to create product."};
        }
        set((state: ProductStore) => ({products: [...state.products, data.data]}))
        return {success: true, message: data.message || 'Product create successfully.'}
    },

    fetchProducts: async() => {
        const response = await fetch('/api/products')
        const data = await response.json()
        if(!data.success) {
            return {success: false, message: data.message || "Failed to get products."};
        }
        set({products: data.data})
        return {success: true, message: data.message || 'Products fetched successfully.'}
    },

    updateProduct: async (id: string, updated: Product) => {
        const response = await fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updated)
        })
        const data = await response.json()
        if(!data.success) {
            return {success: false, message: data.message || "Failed to update product."};
        }
        set((state: ProductStore) => ({
            products: state.products.map((p: Product) => p._id === id ? data.data: p)
        }))
        return {success: true, message: data.message || 'Product updated successfully'}
    },

    deleteProduct: async (id: string) => {
        const response = await fetch(`/api/products/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        if (!data.success){
            return {success: false, message: data.message || "Failed to delete product."};
        }
        set((state: ProductStore)=> ({
            products: state.products.filter(p => p._id !== id)
        }))
        return { success: true, message: "Product deleted successfully." };
    }
}))