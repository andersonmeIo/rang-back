import type { Response, Request } from "express";
import ProductsService from "./products.services";
import {z} from "zod"

const SchemaProducts = z.object({
    produto_name: z.string(),
    produto_desc: z.string(),
    produto_valor: z.number(),
    categoria: z.number()
})

export class ProductsControllers {
    constructor(
        private productsService = new ProductsService
    ) { }
    getProducts = async (req: Request, res: Response) => {
        try {
            const result = await this.productsService.getProducts();

            return res.json(result);
        } catch (error: any) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Erro interno no servidor.'
            })
        }
    }
    postProducts = async (req: Request, res: Response) => {
        try {
            const data = SchemaProducts.safeParse(req.body);
            if(!data.success) return res.status(400).json({message: 'Verifique os valores enviados...'});

            const result =  await this.productsService.createProducts(data.data);
            return res.json(result);
        } catch (error: any) {
            return res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Erro interno no servidor.'
            })
        }
    }
    postCategories = async (req: Request, res: Response) => {
        try {
            const { categoria_name } = req.body;

            const result = await this.productsService.createCategories(categoria_name);

            return res.json(result)
        } catch (error: any) {
            return res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Erro interno no servidor.'
            })
        }
    }
}