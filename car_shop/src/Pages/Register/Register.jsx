import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // reset error and success
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      toast.error("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your password should have at least one upper case characters.");
      toast.error("Your password should have at least one upper case characters.");
      return;
    } else if (!/[@#$%^&+*!=]/.test(password)) {
      setRegisterError("Your Password must contain One Special Character!");
      toast.error("Your Password must contain One Special Character!");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        //save user data in to mongodb
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt: createdAt };
        fetch("https://brand-shop-server-inky.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user added to the database");
            }
          });
        
        navigate(location?.state ? location.state : "/");
        toast.success("You Registerd Successfuly");

        // update profile info
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          console.log("profile info updated");
          window.location.reload();
        });
        // .catch();
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-gray-500 bg-opacity-50 bg-cover bg-no-repeat py-12">
      {/* Register-start */}
      <div>
      <h1 className="mx-auto pt-5 text-5xl text-center font-extrabold uppercase text-[#db2d2e]">Please Register</h1>

        {/* form-start */}
        <form onSubmit={handleRegister} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
          <div className="form-control">
            <label className="input-group w-full">
              <span className="label-text w-1/3">Name</span>
              <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="form-control">
          <label className="input-group w-full">
              <span className="label-text w-1/3">Photo Url</span>
              <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="form-control">
          <label className="input-group w-full">
              <span className="label-text w-1/3">Email</span>
              <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="form-control">
          <label className="input-group w-full">
              <span className="label-text w-1/3">Password</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered relative w-full"
                required
              />
              <span className="absolute text-xl bg-white mt-3 lg:ml-[550px] ml-[305px]" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ce1446] text-white font-bold hover:text-[#ce1446]">Register</button>
          </div>
        </form>

        {/* {registerError && <p className="text-red-700 text-center font-bold">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>} */}
        <p className="text-center">
          Already have an Account ?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
      {/* Register-end */}
    </div>
  );
};

export default Register;
