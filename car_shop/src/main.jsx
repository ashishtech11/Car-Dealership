import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./Pages/Home/Home";
import AddBrandInfo from "./Pages/BrandInfo/AddBrandInfo";
import CreatProduct from "./Pages/AddProduct/CreatProduct";
import BrandsDetails from "./Pages/BrandInfo/BrandsDetails";
import UpdateProduct from "./Pages/AddProduct/UpdateProduct";
import DetailProduct from "./Pages/AddProduct/DetailProduct";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Cart from "./Pages/Cart/Cart";
import Error from "./Pages/Error/Error";
// import BrandDetails from "./Pages/BrandInfo/BrandDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://brand-shop-server-inky.vercel.app/brands"),
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoutes>
            <CreatProduct></CreatProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mycart/:user",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://brand-shop-server-inky.vercel.app/carts"),
      },
      {
        path: "/brands/:brandName",
        element: <BrandsDetails></BrandsDetails>,
        loader: () => fetch("https://brand-shop-server-inky.vercel.app/cars"),
      },
      {
        path: "/addbrand",
        element: <AddBrandInfo></AddBrandInfo>,
      },
      {
        path: "brands/:brandName/updateCar/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-inky.vercel.app/cars/${params.id}`),
      },
      {
        path: "/brands/:brandName/details/:id",
        element: (
          <PrivateRoutes>
            <DetailProduct></DetailProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://brand-shop-server-inky.vercel.app/cars/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
