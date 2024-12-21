import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='navbar bg-base-100 shadow-sm  px-4'>
            <div className='flex-1'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src="" alt='' />
                    <span className='font-bold'>SprintSphere</span>
                </Link>
            </div>
            <div className='flex-none items-center'>
                <ul className='menu menu-horizontal px-1 flex items-center'>
                    <li>
                        <Link to='/allMarathons'>Marathons</Link>
                    </li>
                    {user && (
                        <>
                            <li>
                                <Link to='/addMarathon'>Add Marathon</Link>
                            </li>
                            <li>
                                <Link to='/myMarathonList'>My Marathon List</Link>
                            </li>
                            <li>
                                <Link to='/myApplyList'>My Apply List</Link>
                            </li>
                        </>
                    )}

                    {user && user.email ? (

                        <li>
                            <Link to='/login'><button onClick={logOut}>Logout</button></Link>

                        </li>

                    ) : (
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    )}
                </ul>

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
                    <Link to='/register' className="btn btn-ghost"><button>Register</button></Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;