import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const regsiter = async (req,res)=>{
    try {
        const { username, email, password, confirmPassword} = req.body

        if(password !== confirmPassword){
            return res.status(400).json({error: "Les mots de passe sont pas identique"});
        }

        const user = await UserModel.findOne({email})

        if(user){
            return res.status(400).json({error: "Cet utilisateur existe déjà !"});
        }

        const userProfile = `https://avatar.iran.liara.run/public/boy?username=${email}`;

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
            profile: userProfile
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);

            await newUser.save();

            return res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profile: newUser.profile
            })
        }else{
            return res.status(500).json({error: "Invalid user data"});
        }


    } catch (error) {
        console.log(`Erreur lors de l'inscription de l'utilisateur : ${error.message}`);
        return res.status(500).json({error: "Erreur server"});
    }
}

export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await UserModel.findOne({email})

        const isPasswordGood = await bcrypt.compare(password, user.password)

        if(!user || !isPasswordGood){
            return res.status(400).json({error: "Cet utilisateur n'existe pas !"});
        }

        generateTokenAndSetCookie(user._id,res);

        return res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            profile: user.profile
        })

    } catch (error) {
        console.log(`Erreur lors de la connexion de l'utilisateur : ${error.message}`);
        return res.status(500).json({error: "Erreur server"});
    }   
}

export const logout = (req,res)=>{
    try {

        res.cookie("jwt","",{ maxAge: 0 });
        
        return res.status(200).json({message: "Déconnexion Okay"});

    } catch (error) {
        console.log(`Erreur lors de la déconnexion de l'utilisateur : ${error.message}`);
        return res.status(500).json({error: "Erreur server"});
    }   
}
