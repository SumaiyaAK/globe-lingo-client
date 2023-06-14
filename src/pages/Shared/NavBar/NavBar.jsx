import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import useClass from "../../../hooks/useClass";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [classes] = useClass()


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to="/" className=" text-green-500 font-semibold">Home</Link></li>
        <li><Link to="/instructors" className=" text-green-500 font-semibold">Instructors</Link></li>

        <li><Link to="/classes" className="text-green-500 font-semibold">Classes</Link></li>
        <li><Link to="/private" className="text-green-500 font-semibold">Private</Link></li>
        <li><Link to="/dashboard/myclass" className="text-green-500 font-semibold text-center">
            
                Inbox
                <div className="badge badge-secondary">+{classes?.length || 0}</div>
            

        </Link></li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-outline btn-success btn-sm">Logout</button>
            </> : <>
                <li><Link to="/login" className=" text-green-500 font-semibold">Login</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link><a className="btn btn-ghost normal-case text-xl text-green-500">GlobeLingo</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <Link className="btn-success" to="/registration"><button className="btn btn-success">REGISTER</button></Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;