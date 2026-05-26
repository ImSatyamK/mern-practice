import { Router } from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller'

export const productRouter = Router()

productRouter.get('/', getProducts)
productRouter.post('/', createProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)