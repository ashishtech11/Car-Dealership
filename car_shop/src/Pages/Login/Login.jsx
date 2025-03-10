import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    // sign in user
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("You Successfully Loged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        toast.success("You Sign in Succesfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration Failed");
      });
  };
  return (
    <div>
      {/* login-start */}
      <div className="py-12">
      <h1 className="mx-auto pt-5 text-5xl text-center font-extrabold uppercase text-[#db2d2e]">Please Login</h1>
        {/* form-start */}
        <form onSubmit={handleLogin} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
          <div className="form-control">
            {/* <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required /> */}
            <label className="input-group w-full">
              <span className="w-1/3">Email</span>
              <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            {/* <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />{" "}
            <span
              className="absolute lg:left-[920px] left-[350px] lg:bottom-[320px] bottom-[210px] text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span> */}
            <label className="input-group w-full">
              <span className="w-1/3">Password</span>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Your Password" className="input input-bordered w-full" />
              <span
              className="absolute mt-3 lg:ml-[550px] ml-[305px] bg-white text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ce1446] text-white font-bold hover:text-[#ce1446] ">Login</button>
          </div>
          <Toaster></Toaster>
        </form>
        <div className="lg:w-1/3 md:h-3/4 mx-auto card-body mt-[-30px]">
          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Google
          </button>
        </div>
        {/* form-end */}
        <p className="text-center">
          Do not have an Account ?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
      {/* login-end */}
    </div>
  );
};

export default Login;
