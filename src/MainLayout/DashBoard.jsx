import { Link, NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {

    // Left: load data
    const isAdmin = true;


    return (
        <div className="drawer drawer-mobile h-full ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col  items-center justify-center p-12">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-success drawer-button ">Open DashBoard navigation</label>
            </div>
            <div className="drawer-side bg-green-200">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    {
                        isAdmin ? <>
                             <li><NavLink to='/'>Admin Home</NavLink></li>
                            <li><NavLink to='/'>Add Class</NavLink></li>
                            <li><NavLink to='/'>Manage Classes</NavLink></li>
                            
                            <li><NavLink to='/dashboard/allusers'>All Users</NavLink></li>
                            <li><NavLink to='/dashboard/myclass'>Check Payment History</NavLink></li>
                        
                        </> : <>
                            <li><NavLink to='/'>User Home</NavLink></li>
                            <li><NavLink to='/'>Reservation</NavLink></li>
                            <li><NavLink to='/'>Payment history</NavLink></li>
                            <li><NavLink to='/dashboard/myclass'>My Class</NavLink></li>

                        </>
                    }
                    {/* Sidebar content here */}


                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/instructors'>Instructors</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>
                    <li><Link to='/private'>Private</Link></li>



                </ul>
            </div>
        </div>
    );
};

export default DashBoard;