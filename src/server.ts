import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

async function connectDB() {
    try {
        await mongoose.connect(config.db_uri as string);
        app.listen(config.port, () => {
      console.log(`app is listening on port http://localhost:${config.port}`);
    });

    } catch (error) {
        console.log("Database Connection Failed", error);
    }
}
connectDB();