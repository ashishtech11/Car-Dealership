import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const BrandInfo = () => {
  const loadBrandInfo = useLoaderData();

  const brandsInfo = loadBrandInfo;

  // const {brandName, brandImg} = brandsInfo;

  return (
    <div className="my-10">
      <h1 className="text-center text-[#333] uppercase font-bold text-3xl">Our Brands Shops</h1>
      <div className="flex justify-around items-center gap-5 my-5 lg:flex-row flex-col">
        {brandsInfo.map((brandInfo) => (
          <BrandCard key={brandInfo._id} brandInfo={brandInfo}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default BrandInfo;
