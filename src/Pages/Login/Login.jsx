import { FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import img from "../../assets/images/login/login.svg";
import { FaFacebookF } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const loggedInUser = userCredential.user;
        console.log(loggedInUser);
        const user = { email };

        // get access token

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card w-full max-w-sm shrink-0  border-2 rounded-lg ">
          <h1 className="text-center font-semibold text-5xl mt-10">
            Login Now !
          </h1>
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Login</button>
            </div>
          </form>
          <div>
            <p className="text-center">Or SignIn with</p>
            <div className="flex text-center gap-4 justify-center mt-4 text-xl">
              <div className="bg-gray-200 p-2 rounded-full">
                <FaFacebookF />
              </div>
              <div className="bg-gray-200 p-2 rounded-full">
                <FaLinkedinIn />
              </div>
              <div className="bg-gray-200 p-2 rounded-full">
                <FaGoogle />
              </div>
            </div>
            <p className="text-center my-4">
              Do not have an account?
              <span className="text-red-500 ">
                <Link to="/signup"> Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
