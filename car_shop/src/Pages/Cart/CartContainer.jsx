/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import Rating from "../AddProduct/Rating";


const CartContainer = ({cart,cartsDetails, setCartsDetails}) => {
    const { _id, image, name, type, price, ratting } = cart;

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://brand-shop-server-inky.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Cart has been Removed.',
                                'success'
                            )
                            const remaining = cartsDetails.filter(car => car._id !== _id);
                            setCartsDetails(remaining);
                        }
                    })

            }
        })
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row w-10/12 mx-auto my-5 space-y-5 border">
        <figure className="lg:w-1/2 w-full">
          <img className="ml-8" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Name: {name}</h2>
          <p>Car Type: {type}</p>
          <p>Car Price: {price} lac BDT.</p>
          <p className="flex gap-2">Car Rating: <td><Rating rating={ratting}></Rating></td></p>
          <div className="card-actions justify-end">
            {/* <Link to={`updateCar/${_id}`}> */}
              <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
        </div>
    );
};

export default CartContainer;