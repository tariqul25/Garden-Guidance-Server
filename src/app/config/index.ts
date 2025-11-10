import dotenv from "dotenv";
dotenv.config();
export default {
port: process.env.PORT || 5000,
database_url: process.env.DATABASE_URL,
jwt_secret: process.env.JWT_SECRET || "secret",
};