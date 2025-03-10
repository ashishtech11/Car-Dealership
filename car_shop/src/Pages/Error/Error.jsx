import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import errorpic from "/err.png";
import { Link, Navigate } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-16">
        <img src={errorpic} alt="" />
        <h1 className="text-5xl text-center">Opps!!! Something Wrong</h1>
        <div className="link__404 text-center mt-5">
          <button onClick={() => Navigate(-1)}> </button>
          <Link className="text-blue-600 underline" to={"/"}>
            {" "}
            Back to Home
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
