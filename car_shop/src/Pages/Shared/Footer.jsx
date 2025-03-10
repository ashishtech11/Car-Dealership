import logopic from "/logo-light1.png";
import { BiSolidPhoneCall } from 'react-icons/bi';
// import { FaBeer } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content grid md:grid-cols-1 lg:grid-cols-3 gap-5 py-16">
        <div>
          <img src={logopic} alt="" />
          <p className="text-[#777] text-base my-5">
            We know the difference is in the details and that’s why our car rental services, in the tourism and business industry, stand out for their
            quality.
          </p>
          <div className="form-control">
            <label className="input-group">
              <input type="text" placeholder="Enter Your Email" className="input input-bordered" />
              <span className="bg-[#D81517] text-white btn">Email</span>
            </label>
          </div>
        </div>
        <div>
          <header className="text-[#D81517] font-semibold"> CALL US ON LINE 1</header>
          <p className="text-[#333] text-3xl font-semibold flex gap-2 items-center"> <BiSolidPhoneCall className="text-red-600"></BiSolidPhoneCall> 91111 11190</p>
          <p className="text-[#333] text-xl font-medium">USEFUL LINKS</p>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <header className="text-[#D81517] font-semibold"> CALL US ON LINE 2</header>
          <p className="text-[#333] text-3xl font-semibold flex gap-2 items-center"> <BiSolidPhoneCall className="text-red-600"></BiSolidPhoneCall> 12345 67890</p>
          <p className="text-[#333] text-xl font-medium uppercase">our info</p>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <p className="text-[#333] text-xl font-medium uppercase">Account Info</p>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
          © Copyright 2025 Car Dealer Developed By Signikart
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
