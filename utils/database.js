import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
            dbName: "share_prompt",
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB is connected successfully");
    } catch (error) {
        console.log("database error: ", error)
    }
}