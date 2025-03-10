import { Link, NavLink } from "react-router-dom";
import logoPic from "/logo-light.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li className="uppercase">
        <NavLink
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")}
          to="/addProducts"
        >
          Add Product
        </NavLink>
      </li>

      <li className="uppercase">
        {/* <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/myCart"> */}
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to={`/mycart/${user?.uid}`}>
          My Cart
        </NavLink>
      </li>

      <li className="uppercase">
        <NavLink
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")}
          to="/addbrand"
        >
          Add Brand
        </NavLink>
      </li>

      {user ? (
        <>
          <li className="uppercase">
            <NavLink
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-gray-400 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logoPic} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* <Link to="/login">
            <a className="btn">Log In</a>
          </Link> */}
          <DarkMode></DarkMode>
          {user ? (
          <>
            <span className="mr-3">{user.displayName}</span>
            <span className="mr-3 btn btn-ghost btn-circle avatar w-10 rounded-full">
              <img src={user.photoURL} alt="" />
            </span>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
