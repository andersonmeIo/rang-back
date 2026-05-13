import type { Request, Response } from "express";
import AuthServices from "./auth.services";
import { success } from "zod";

export default class AuthControllers {
    constructor(
        private authServices = new AuthServices()
    ) { }

    login = async (req: Request, res: Response) => {
        try {
            const { user_email, user_password } = req.body;
            const postLogin = await this.authServices.loginUser({ user_email, user_password });

            return res.json(postLogin)
        } catch (error: any) {
            return res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Erro interno no servidor.'
            })
        }
    }

    register = async (req: Request, res: Response) => {
        try {
            const { user_name, user_email, user_password } = req.body;

            const postRegister = await this.authServices.createUser({user_name, user_email, user_password});
            
            return res.json(postRegister)
        } catch (error: any) {
            return res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Erro interno no servidor.'
            })
        }
    }
}