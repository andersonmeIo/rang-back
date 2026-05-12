import { success } from "zod";
import { getDB } from "../../shared/database/connection";
import bcrypt from "bcrypt";

type LoginUser = {
    user_email: string,
    user_password: string
}
type CreateUser = {
    user_name: string,
    user_email: string,
    user_password: string
}

export default class AuthServices {
    async loginUser(data:LoginUser) {
        try {
            const db = getDB();

            const [rows] = await db.execute(`SELECT * FROM Users WHERE user_email = ?`, [data.user_email]);
            const users = rows as any[];

            if(users.length === 0) return {message: 'Usuário não encontrado.'}
            
            const verifyPass = await bcrypt.compare(data.user_password, users[0].user_password);

            if(!verifyPass) return {message: 'Verifique os dados de login.'}

            return {
                success: true,
                message: 'Logado com sucesso.'
            }
        } catch (error) {

        }
    }

    async createUser(data: CreateUser) {
        try {
            const db = getDB();
            const saltRounds = 10;
            const passHash = await bcrypt.hash(data.user_password, saltRounds);
            const [result] = await db.query(`INSERT INTO Users (user_name, user_email, user_password) VALUES (?, ?, ?)`, [data.user_name, data.user_email, passHash]);

            return {
                success: true,
                message: "Usuário criado com sucesso."
            }
        } catch (error) {
            if (error instanceof Error) {
                return (error.message)
            }
            throw new Error("Erro desconhecido ao criar o usuário")
        }
    }
}