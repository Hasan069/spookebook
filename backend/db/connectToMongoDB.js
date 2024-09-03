import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to the MongoDB");
  } catch (error) {
    console.log("Error connecting to the database", error.message);
  }
};

export default connectToMongoDB;

// await mongoose.connect("mongodb+srv://amihasan420:tjjI8pHVHAOo7yHS@cluster0.ruehj.mongodb.net/spookebook?retryWrites=true&w=majority&appName=Cluster0");
// dotenv.config({ path: ".env" });
// import dotenv from "dotenv";
