import {config as dotenv} from "dotenv"
dotenv();

export const config = {   
    host: process.env.DB_HOST,
    user: process.env.DB_USER || 'root',
    database: process.env.DB_DATABASE || 'tasksdb',
    password: process.env.DB_PASSWORD || ''
}