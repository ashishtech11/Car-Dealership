import { useLoaderData } from "react-router-dom";
import Rating from "./Rating";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const DetailProduct = () => {

  const {user} = useContext(AuthContext);

  console.log(user.uid);

  const carDetail = useLoaderData();

  const { image, name, type, ratting, description, price, brand } = carDetail;

  const [selectedCar, setSelectedCart] = useState([]);

  const handleAddCart = (carDetail) => {

    setSelectedCart([...selectedCar, carDetail]);

    const newData = {...carDetail, user:user.uid};

    //send data to the server
    fetch("https://brand-shop-server-inky.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfuly Add to Cart",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };


  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-3xl my-10 font-extrabold">{name} Details</h1>
          <img className="w-3/4 mx-auto mb-10" src={image} alt="" />
        </div>
        {/* table-start */}
        <div className="overflow-x-auto mb-10">
          <table className="table text-base">
            {/* head */}
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <td>Name</td>
                <td>{name}</td>
              </tr>
              <tr className="hover">
                <td>Brand</td>
                <td className="uppercase font-bold">{brand}</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td>Car Type</td>
                <td className="uppercase">{type}</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <td>Price</td>
                <td>{price} Lac BDT.</td>
              </tr>
              <tr className="hover">
                <td>Description</td>
                <td>{description}</td>
              </tr>
              <tr className="hover">
                <td>Ratting</td>
                <td>
                  <Rating rating={ratting}></Rating>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table-end */}
        <div className="card-actions justify-end mb-10">
          <button onClick={() => handleAddCart(carDetail)} className="btn btn-primary">
            Add To Cart
          </button>
          {/* <button onClick={handleAddCart} className="btn btn-primary">
            Add To Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
