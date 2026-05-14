import type { Request, Response } from "express";
import AuthServices from "./auth.services";
import { z } from "zod";

const SchemaLogin = z.object({
    user_email: z.email(),
    user_password: z.string().min(6)
})
const SchemaRegister = SchemaLogin.extend({
    user_name: z.string()
})

export default class AuthControllers {
    constructor(
        private authServices = new AuthServices()
    ) { }

    login = async (req: Request, res: Response) => {
        try {
            const data = SchemaLogin.safeParse(req.body);
            if (!data.success) return res.status(400).json({ message: 'Verifique os valores enviados...' });

            const postLogin = await this.authServices.loginUser(data.data);

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
            const data = SchemaRegister.safeParse(req.body);
            if (!data.success) return res.status(400).json({ message: 'Verifique os valores enviados...' });

            const postRegister = await this.authServices.createUser(data.data);

            return res.json(postRegister)
        } catch (error: any) {
            return res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || 'Erro interno no servidor.'
            })
        }
    }
}