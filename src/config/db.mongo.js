import mongoose from "mongoose";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "test") {
    dotenv.config({ path: ".env.test" });
    console.log("Chargement des variables depuis .env.test");
} else {
    dotenv.config();
    console.log("Chargement des variables depuis .env");
}

const connectMongo = async () => {
  try {
    const mongoUri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongodb:27017/${process.env.MONGO_DBNAME}?authSource=admin`;
    await mongoose.connect(mongoUri);
    console.log("Connecté à MongoDB");
  } catch (err) {
    console.error("Erreur de connexion MongoDB :", err);
  }
};

export default connectMongo;