import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   //root route is
//   res.send("hello nigga");
// });

app.use(express.json()); 

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on the port ${PORT}`);
});
