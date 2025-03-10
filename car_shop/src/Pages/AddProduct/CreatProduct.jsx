/**
 * https://i.ibb.co/KrpL5zn/2022-bmw-m3-012.webp
https://i.ibb.co/xCdLsyr/d06ab298-2019-bmw-x7-1024x555.jpg
https://i.ibb.co/QFqZ8XM/maxresdefault.jpg

 * 
 * 
 */

import Swal from "sweetalert2";

const CreatProduct = () => {
  const handleCreateProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratting = form.ratting.value;

    const addProduct = { name, image, brand, type, price, description, ratting };

    //send data to the server
    fetch("https://brand-shop-server-inky.vercel.app/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfuly Inserted",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });

    console.log(addProduct);
  };

  return (
    <div className="bg-[url('/image/add.jpg')] bg-gray-500 bg-opacity-50 bg-cover bg-no-repeat ">
      <div>
        <h1 className="mx-auto pt-5 text-5xl text-center font-extrabold uppercase text-[#db2d2e]">Add Car</h1>
        {/* form-start */}
        <form onSubmit={handleCreateProduct} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Product Name</span>
              <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Image Url</span>
              <input type="text" placeholder="Product Image Url" name="image" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              {/* <span className="w-1/3">Brand Name</span>
              <input type="text" placeholder="Product Brand Name" name="brand" className="input input-bordered w-full" /> */}
              <select className="select select-bordered w-full" name="brand">
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
              <select className="select select-bordered w-full" name="type">
                <option>Select Type</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Price</span>
              <input type="number" placeholder="Product Price" name="price" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Description</span>
              <input type="text" placeholder="Product Description" name="description" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span className="w-1/3">Ratting</span>
              <input type="text" placeholder="Product Ratting" name="ratting" className="input input-bordered w-full" />
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

export default CreatProduct;
