import Product  from "../models/product.models";
import { Request, Response } from "express";
import mongoose from "mongoose";

export async function getProducts(req: Request, res: Response) {
    try{
        const products = await Product.find({})
        res.status(200).json({success: true, message: 'data fetched successfully', data: products})
    } catch(error){
        console.log("error in fetching products:", error instanceof Error? error.message: error);
		res.status(500).json({ success: false, message: "Server Error" });
    }
}

export async function createProduct(req: Request, res: Response) {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'Name, price, and image are required' });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        return res.status(201).json({ success: true, message: 'Product created successfully', data: newProduct });
    } catch (error) {
        console.error('Error saving product:', error instanceof Error? error.message : error);
        return res.status(500).json({ success: false, message: 'Error saving product' });
    }
}

export async function updateProduct(req:Request, res:Response) {
    const id = req.params.id as string
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({success: true, message: 'product updates successfully', data: updatedProduct})
    } catch (error) {
        console.error('Error saving product:', error instanceof Error? error.message : error);
        return res.status(500).json({ success: false, message: 'Error saving product' });
    }
}

export async function deleteProduct(req: Request, res: Response) {
    const id = req.params.id as string
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.log("error in deleting product:", error instanceof Error? error.message: error);
		res.status(500).json({ success: false, message: "Server Error" });
	}

}