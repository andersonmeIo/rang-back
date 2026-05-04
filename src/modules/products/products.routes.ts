import { Router } from "express";

import { ProductsControllers } from "./products.controllers.js";

export const productsRouter = Router();
const productsControllers = new ProductsControllers();

productsRouter.get('/', productsControllers.getProducts);