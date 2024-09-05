import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be loged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
            console.log(error);
          });
        Swal.fire({
          title: "Log Out!",
          text: "Log out successfully",
          icon: "success",
        });
      }
    });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center gap-5">
            <Link to="/bookings" className="text-4xl">
              <CiShoppingCart />
            </Link>
            <button
              onClick={handelLogOut}
              className="btn btn-outline btn-error text-lg font-semibold"
            >
              log Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline btn-error text-lg font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
