import { getDB } from "../../shared/database/connection";

export default class ProductsService {
    async getProducts() {
        const db = getDB();

        const [rows] = await db.query(`SELECT * FROM Produtos`)

        return {
            
        }
    }
}