import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = () => {
    const{user, signOUT}=useContext(AuthContext);
    const handleSignout=()=>{
        signOUT()
        .then(()=>{
            console.log('Signout success');
        }).catch((error)=>{
            console.log(error.message);
        })
    }
    const navlink=<>
    <li><NavLink to='/'>Home</NavLink></li>
    {
        user && <>
        <li><NavLink to='/allArtAndcraft'>All Art & craft Items</NavLink></li>
        <li><NavLink to='/addCraft'>Add Craft Item</NavLink></li>
        <li><NavLink to='/myArtAndcraft'>My Art & Craft List</NavLink></li>
        </>
    }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navlink}
                </ul>
                </div>
                <Link to='/'>
                <a className="btn btn-ghost text-xl font-bold hover:bg-blue-400 hover:text-white">Picture Website</a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<>
                    <h1 className="mr-2 bg-blue-600 px-2 rounded text-white font-bold">{user.email}</h1>
                    <div onClick={handleSignout}><a className="btn">Sign out</a></div>
                    </>
                    :<Link to='/signUp'>
                    <a className="btn">Sign up</a>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Nav;