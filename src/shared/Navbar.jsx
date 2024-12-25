import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const menuItems = (
        <>

            <NavLink to="/allMarathons" className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "text-white"
            }>Marathons</NavLink>
            {user && (
                <>
                    <NavLink to="/addMarathon" className={({ isActive }) =>
                        isActive ? "text-yellow-500 font-semibold" : "text-white"
                    }>Add Marathon</NavLink>
                    <NavLink to="/myMarathonList" className={({ isActive }) =>
                        isActive ? "text-yellow-500 font-semibold" : "text-white"
                    }>My Marathon List</NavLink>
                    <NavLink to="/myApplyList" className={({ isActive }) =>
                        isActive ? "text-yellow-500 font-semibold" : "text-white"
                    }>My Apply List</NavLink>
                </>
            )}

            {user && user.email ? (
                <Link to='/login' onClick={logOut}
                    className="btn btn-ghost hover:bg-stone-500 font-normal">Logout
                </Link>
            ) : (
                <Link to='/login'
                    className="btn btn-ghost hover:bg-stone-500 font-normal">Login
                </Link>
            )}
        </>
    )

    return (
        <div className='navbar fixed top-0 z-50 bg-stone-800 text-white shadow-sm  px-4'>
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content 
                        bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menuItems}
                    </ul>
                </div>


            </div>
            <div className='flex-1 pr-24 lg:pr-0'>
                <Link to='/' className='flex gap-2 items-center'>
                    <span className='font-bold'>SprintSphere</span>
                </Link>
            </div>
            <div className='lg:flex items-center'>
                <div className='lg:flex hidden'>
                    <ul className='menu menu-horizontal px-1 flex items-center gap-5'>
                        {menuItems}
                    </ul>
                </div>

                {user && user.email ? (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>

                    </div>
                ) : (
                    <Link to='/register' className="btn btn-ghost text-white font-normal hover:bg-stone-500 hover:text-white"><button>Register</button></Link>
                )}
            </div>



        </div>
    );
};

export default Navbar;