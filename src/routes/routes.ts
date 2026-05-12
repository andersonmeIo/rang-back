import { Router } from "express";
import { productsRouter } from "../modules/products/products.routes.js";
import { authRouter } from "../modules/auth/auth.routes.js";

export const router = Router();

// Auth Router
router.use("/api/auth", authRouter)

// Products Router
router.use("/api/products", productsRouter);
