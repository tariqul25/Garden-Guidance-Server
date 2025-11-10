import { app } from "./app";
import mongoose from "mongoose";
import config from "./app/config";
async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Database Connected Successfully");
        app.listen(config.port, () => {
            console.log(`Server running on port http://localhost:${config.port}`);
        });
    } catch (error) {
        console.log("Database Connection Failed", error);
    }
}
main();