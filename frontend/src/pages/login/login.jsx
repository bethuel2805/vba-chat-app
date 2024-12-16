import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};
  return (
    <div className="flex items-center min-w-96 mx-auto flex-col justify-center">
        <div className="w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
				Connexion
				<span className='text-orange-500'> VBA-Chat</span>
			</h1>

            <form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='email'
							placeholder='Your email'
							className='w-full input input-bordered h-10'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/register' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2'>
							{loading ? <span className='loading loading-spinner '></span> : "Se connecter"}
						</button>
					</div>
				</form>
        </div>
    </div>
  )
}

export default Login
