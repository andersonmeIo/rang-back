import { Router } from "express";
import { productsRouter } from "../modules/products/products.routes.js";

export const router = Router();

// Auth Router

// Products Router
router.use("/api/products", productsRouter);