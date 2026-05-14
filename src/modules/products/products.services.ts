import type { ResultSetHeader } from "mysql2";
import { getDB } from "../../shared/database/connection";

type CreateCategories = {
    produto_name: string, 
    produto_desc: string, 
    produto_valor: number, 
    categoria: number
}

export default class ProductsService {
    async getProducts() {
        const db = getDB();

        const [produtos] = await db.query<ResultSetHeader>(`SELECT * FROM Produtos`);
        
        return {
            produtos
        }
    }
    async createProducts(data: CreateCategories) {
        try {
            const db = getDB();
    
            const [result] = await db.query<ResultSetHeader>(`
                INSERT INTO Produtos (produto_name, produto_desc, produto_valor, categoria)
                VALUES (?, ?, ?, ?)
            `, [data.produto_name, data.produto_desc, data.produto_valor, data.categoria]);

            return {
                success: true,
                message: "Produto cadastrado com sucesso."
            }
        } catch (error: any) {
            if(error.code === 'ER_DUP_ENTRY') {
                throw {
                    statusCode: 409,
                    message: "Produto já cadastrado"
                }
            }
            throw new Error(error.message)
        }
    }
    async createCategories(categoria_name: string) {
        try {
            const db = getDB();
            const [result] = await db.query<ResultSetHeader>(`
                INSERT INTO Categorias (categoria_name) 
                VALUES (?)
            `, [categoria_name])
    
            return {
                success: true,
                message: "Categoria cadastrada com sucesso."
            }
        } catch (error: any) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw {
                    statusCode: 409,
                    message: 'Categoria já cadastrada.'
                };
            }
            throw new Error(error.message);
        }
    }
}