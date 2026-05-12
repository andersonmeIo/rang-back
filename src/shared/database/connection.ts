import mysql from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


let pool: Pool;

export const connectDB = async () => {
    try {
        pool = mysql.createPool({
            host: process.env.DATABASE_HOST!,
            user: process.env.DATABASE_USER!,
            password: process.env.DATABASE_PASSWORD!,
            database: process.env.DATABASE_NAME!,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        })

        const connection = await pool.getConnection();
        await connection.ping();
        connection.release();

        console.log('*******************************');
        console.log('');
        console.log('MySQL conectado com sucesso.');
        console.log('');
        return pool;
    } catch (error) {
        console.error('Erro ao conectar no MySQL:', error);
        process.exit(1);
    }
}

export const getDB = () => {
    if (!pool) {
        throw new Error('MySQL não inicializado. Chame connectDB primeiro.');
    }
    return pool;
};
