import { FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import img from "../../assets/images/login/login.svg";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card w-full max-w-sm shrink-0  border-2 rounded-lg ">
          <h1 className="text-center font-semibold text-5xl mt-10">Login</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
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
              Have an account?
              <span className="text-red-500 ">
                <Link to="/login"> Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
