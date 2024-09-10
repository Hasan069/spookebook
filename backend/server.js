import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDb.js";
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   //root route is
//   res.send("hello nigga");
// });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on the port ${PORT}`);
});
