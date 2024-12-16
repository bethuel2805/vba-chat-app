import { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

const Register = () => {
    const [inputs, setInputs] = useState({
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});

    const {loading,register} = useRegister()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        await register(inputs)
        
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Inscription <span className='text-orange-500'> VBA-Chat</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Altaïr'
                        className='w-full input input-bordered  h-10'
                        value={inputs.username}
                        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                    />
                </div>

                <div>
                    <label className='label p-2 '>
                        <span className='text-base label-text'>Email</span>
                    </label>
                    <input
                        type='text'
                        placeholder='vba@vba.com'
                        className='w-full input input-bordered h-10'
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        className='w-full input input-bordered h-10'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                    />
                </div>


                <Link to="/login"
                    className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
                    href='#'
                >
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700'>
                        {loading ? <span className='loading loading-spinner'></span> : "S`inscrire"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register
