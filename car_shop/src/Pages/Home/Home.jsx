import BrandInfo from "../BrandInfo/BrandInfo";
import About from "./About";
import Banner from "./Banner";
import FAQ from "./FAQ";

const Home = () => {

  return (
    <div className="">
      <Banner></Banner>
      <div className="w-5/6 mx-auto">
        <BrandInfo></BrandInfo>
        <About></About>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
