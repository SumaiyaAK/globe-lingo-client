import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";


const Registration = () => {
    const { createUser } = useContext(AuthContext)




    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const ConfirmPassword = form.confirmPassword.value;
        const PhotoUrl = form.photoUrl.value;
        console.log(email, password);
        createUser(email, password, ConfirmPassword, PhotoUrl)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .then(error => console.log(error))
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Secure Access Portal: Streamlined Login Gateway for Enhanced User Authentication and Seamless Account Management Experience.</p>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
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
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="photo url" name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        <p className="p-4 text-center"><small>If you already have an account <Link to="/login">Login</Link></small></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Registration;