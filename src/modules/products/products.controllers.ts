import type { Response, Request } from "express";
import ProductsService from "./products.services";

import products from '../../shared/products.json'

export class ProductsControllers {
    constructor(
        private productsService = new ProductsService
    ) { }
    getProducts = async (req: Request, res: Response) => {
        try {
            const result = await this.productsService.getProducts();
            
        } catch (error) {
            
        }
    }
}