import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
import userRouter from "./routers/user.route.js";

import connectDB from "./db/connect.db.js";

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter);
app.use("/api/messages",messageRouter);
app.use("/api/users",userRouter);

app.listen(PORT,()=>{
    connectDB();
    console.log("Server running on port : ",PORT);
})