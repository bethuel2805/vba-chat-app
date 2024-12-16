import { Server } from "socket.io";
import http from "http"
import express from "express"

const app = express()

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin: "*",
        methods: ["GET","POST"]
    }
})

const usersSocketMap = {}

export const getReceiverSocketId = (receiverId)=>{
    return usersSocketMap[receiverId]
}

io.on("connection", (socket)=>{
    console.log("User connected : ",socket.id);
    
    const userId = socket.handshake.query.userId
    if(userId != "undefined"){
        usersSocketMap[userId] = socket.id
    }

    io.emit("getOnlineUsers", Object.keys(usersSocketMap))

    socket.on("disconnect", ()=>{
        console.log("User disconnect : ",socket.id);
        delete usersSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(usersSocketMap))
    })
})

export {app,io,server}