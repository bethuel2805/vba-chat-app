import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";


const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Unautorized - No Token Provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error: "Unautorized - Invalid Token"})
        }

        const user = await UserModel.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).json({error: "User not found"})
        }

        req.user = user;

        next();
        
    } catch (error) {
        console.log("Error lors de la protection des routes : ",error.message);
        res.status(500).json({error: "Server error"})
    }
}

export default protectRoute;