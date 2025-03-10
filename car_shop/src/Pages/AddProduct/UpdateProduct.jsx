import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const carDetail = useLoaderData();

  const { _id, image, name, type, ratting, description, price, brand } = carDetail;

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratting = form.ratting.value;

    const updateProduct = { name, image, brand, type, price, description, ratting };

    //send data to the server
    fetch(`https://brand-shop-server-inky.vercel.app/cars/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Updated Successfuly Updated",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });

    console.log(updateProduct);
  };

  return (
    <div className="bg-[url('/image/add.jpg')] bg-gray-500 bg-opacity-50 bg-cover bg-no-repeat ">
      <div>
        <h1 className="mx-auto pt-5 text-5xl text-center font-extrabold uppercase text-[#db2d2e]">Add Car</h1>
        {/* form-start */}
        <form onSubmit={handleUpdateProduct} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Product Name</span>
              <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Image Url</span>
              <input type="text" placeholder="Product Image Url" defaultValue={image} name="image" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              {/* <span className="w-1/3">Brand Name</span>
              <input type="text" placeholder="Product Brand Name" name="brand" className="input input-bordered w-full" /> */}
              <select className="select select-bordered w-full" defaultValue={brand} name="brand">
                <option>Select Brand</option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="bmw">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Tesla">Tesla</option>
                <option value="Honda">Honda</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              {/* <span className="w-1/3">Brand Name</span>
              <input type="text" placeholder="Product Brand Name" name="brand" className="input input-bordered w-full" /> */}
              <select className="select select-bordered w-full" defaultValue={type} name="type">
                <option>Select Type</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Price</span>
              <input type="number" placeholder="Product Price" defaultValue={price} name="price" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Description</span>
              <input
                type="text"
                placeholder="Product Description"
                defaultValue={description}
                name="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Ratting</span>
              <input type="text" placeholder="Product Ratting" defaultValue={ratting} name="ratting" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ce1446] text-white font-bold hover:text-[#ce1446] ">Add</button>
          </div>
        </form>
        {/* form-end */}
      </div>
    </div>
  );
};

export default UpdateProduct;
