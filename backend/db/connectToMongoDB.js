import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({path:'.env'});






const connectToMongoDB = async () => {
  try {
   await mongoose.connect("mongodb+srv://amihasan420:tjjI8pHVHAOo7yHS@cluster0.ruehj.mongodb.net/spookebook?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to the MongoDB");
  } catch (error) {
    console.log("Error connecting to the database", error.message);
  }
};

export default connectToMongoDB;
