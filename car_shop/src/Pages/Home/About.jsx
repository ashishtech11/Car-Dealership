import aboutImg from "/image/who.jpg";

const About = () => {
  return (
    <div className="flex flex-1 gap-5 mt-10 justify-around items-center p-5 lg:flex-row flex-col-reverse">
      <div className="w-full">
        <img src={aboutImg} alt="" />
      </div>
      <div>
        <p className="text-[#333] uppercase font-normal mb-4 tracking-widest text-base">KNOW MORE ABOUT US</p>
        <h2 className="text-4xl text-[#333]">
          Who <span className="font-bold">Cars Dealers</span> are
        </h2>
        <hr className="bg-[#D81517] h-1 w-10 mt-8" />
        <p className="text-[#999] text-base my-5">
          KNOW MORE ABOUT US WhoCars Dealers are We know the difference is in the details and that’s why our car rental services, in the tourism and
          business industry, stand out for their quality and good taste.
        </p>
        <ul className="my-5 space-y-3">
          <li>We working since 1980 with 4.000 customers</li>
          <li>All brand & type cars in our garage</li>
          <li>1.000+ picking locations around the world</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
