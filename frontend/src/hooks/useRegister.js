import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useRegister = ()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthContext} = useAuthContext(); 

    const register = async ({username,email,password,confirmPassword})=>{
        const success = handleInputErrors({username,email,password,confirmPassword})
        if(!success) return;
        setLoading(true)
        try {
            const response = await fetch("/api/auth/register",{
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({username,email,password,confirmPassword})
            })

            if(response.ok){
                toast.success("Inscription Okay");
            }

            const data = await response.json()

            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            
            setAuthContext(data)
            
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }

    return { loading, register}
}

export default useRegister

function handleInputErrors({username,email,password,confirmPassword}){

    if(!username || !email || !password || !confirmPassword){
        toast.error("All fields are required !")
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false;
    }
    
    if(password.length < 6){
        toast.error("Password 6 caract must be")
        return false;
    }

    return true
}