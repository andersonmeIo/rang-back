import { Router } from "express";
import AuthControllers from "./auth.controllers";

export const authRouter = Router();
const authControllers = new AuthControllers();

authRouter.post("/register", authControllers.register);
authRouter.post("/", authControllers.login);