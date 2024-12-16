import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { authUser } = useAuthContext()
  return (
    <div className="p-4 flex h-screen items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />}/>
        <Route path="/login" element={authUser ? <Navigate to="/"  /> : <Login />}/>
        <Route path="/register" element={authUser ? <Navigate to="/"  /> : <Register />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
