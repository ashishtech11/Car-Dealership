/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandCard = ({ brandInfo }) => {
  const { brandName, brandImg } = brandInfo;

  return (
    <div className="">
      <Link to={`/brands/${brandName}`}>
        <div className="card bg-base-100 shadow-xl flex flex-col">
          <figure className="w-[165px] p-2">
            <img src={brandImg} alt={brandName} />
          </figure>
          <div className="card-body flex-grow">
            <h2 className="card-title text-center">{brandName}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
