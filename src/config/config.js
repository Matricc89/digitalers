// Hay que agregar mas productos desde postman
// PORT = 8000
// SECRET_KEY_SESSION = "1234"
// JWT_SECRET = "1234"
// ADMIN_EMAIL = "admin@gmail.com"
// ADMIN_PASSWORD = "1234"

import dotenv from 'dotenv';

dotenv.config();

export const PORT= 8000
export const MONGO_URL= process.env.MONGO_URL
export const SECRET_KEY_SESSION = process.env.SECRET_KEY_SESSION
export const JWT_SECRET= process.env.JWT_SECRET
export const ADMIN_EMAIL= process.env.ADMIN_EMAIL
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
