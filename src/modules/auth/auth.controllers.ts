import type { Request, Response } from "express";
import AuthServices from "./auth.services";

export default class AuthControllers {
    constructor(
        private authServices = new AuthServices()
    ) { }

    login = async (req: Request, res: Response) => {
        try {
            const { user_email, user_password } = req.body;

            const postLogin = await this.authServices.loginUser({ user_email, user_password });

            return res.json({
                result: postLogin
            })
        } catch (error) {

        }
    }

    register = async (req: Request, res: Response) => {
        try {
            const { user_name, user_email, user_password } = req.body;

            const postRegister = await this.authServices.createUser({user_name, user_email, user_password});
            
            return res.json({
                result: postRegister
            })
        } catch (error) {

        }
    }
}