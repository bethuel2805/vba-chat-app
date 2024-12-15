import UserModel from "../models/user.model.js";

export const getAllUsers = async (req,res)=>{
    try {
        const userId = req.user._id;

        const otherUsers = await UserModel.find({_id: { $ne: userId }}).select("-password -__v")

        res.status(200).json(otherUsers)

    } catch (error) {
        console.log("Error lors de la recuperation des utilisateurs : ",error.message);
        res.status(500).json({error: "Server error"})
    }
}