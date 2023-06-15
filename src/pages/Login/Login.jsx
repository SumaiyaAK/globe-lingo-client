import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";


const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at least two uppercase');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add a special character')
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Secure Access Portal: Streamlined Login Gateway for Enhanced User Authentication and Seamless Account Management Experience.</p>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Login</button>
                            </div>
                        </div>
                        <p className='text-danger text-center'>{error}</p>
                        <p className='text-success text-center'>{success}</p>
                        <p className="p-4 text-center text-blue-500 font-semibold"><small>If you do not have an account <Link to="/registration"><a className="text-xl text-green-500">Register</a></Link></small></p>
                        <GoogleLogin></GoogleLogin>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;