import { useLoaderData, useParams } from "react-router-dom";
import CartContainer from "./CartContainer";
import { useState } from "react";

const Cart = () => {
  
  const cartInfo = useLoaderData();

  const { user } = useParams();

  const cartDetails = cartInfo.filter((cartInfo) => cartInfo.user === user);

  const [cartsDetails, setCartsDetails] = useState(cartDetails);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5 underline">Cart Item: {cartsDetails.length}</h1>
      <div className="grid grid-cols-2">
        {cartsDetails.map((cart) => (
          <CartContainer key={cart._id} cartsDetails={cartsDetails} setCartsDetails={setCartsDetails} cart={cart}></CartContainer>
        ))}
      </div>
    </div>
  );
};

export default Cart;
