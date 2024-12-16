import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import path from "path"

import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
import userRouter from "./routers/user.route.js";

import connectDB from "./db/connect.db.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve()


dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.use(cors({
    origin: "*"
}))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

app.use("/api/auth",authRouter);
app.use("/api/messages",messageRouter);
app.use("/api/users",userRouter);

server.listen(PORT,()=>{
    connectDB();
    console.log("Server running on port : ",PORT);
})