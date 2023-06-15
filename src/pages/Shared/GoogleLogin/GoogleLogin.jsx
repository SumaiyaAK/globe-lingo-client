import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true });
        })
    }
    return (
        <div className="text-center mb-10">
            <button onClick={handleGoogleSignIn}className="btn btn-outline btn-success ">Google</button>
        </div>
    );
};

export default GoogleLogin;