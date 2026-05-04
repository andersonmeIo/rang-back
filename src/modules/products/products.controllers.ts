import type { Response, Request } from "express";
import { z } from 'zod';

import products from '../../shared/products.json'

export class ProductsControllers {
    getProducts = async (req: Request, res: Response) => {
        try {

            res.json(products);
        } catch (error) {
            
        }
    }
}