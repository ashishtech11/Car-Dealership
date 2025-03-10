const FAQ = () => {
  return (
    <div className="my-10">
      <p className="uppercase text-[#333] text-base tracking-widest">FIND YOUR ANSWER HERE</p>
      <h2 className="text-4xl text-[#333] font-medium">
        Frequently <span className="font-extrabold">Asked Questions.</span>
      </h2>
      <div className="join join-vertical w-full mt-5">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">How Can I Select a Car</div>
          <div className="collapse-content">
            <p>
              Selecting the right car involves thoughtful consideration of your individual needs, preferences, and budget. Start by determining your
              budget, accounting for not only the initial purchase price but also ongoing costs like insurance, fuel, and maintenance. Next, assess
              your specific requirements, such as the number of passengers, cargo space, and the primary use of the vehicle. Consider whether a new or
              used car suits your budget and priorities. Research vehicle types that align with your lifestyle, whether it's a compact sedan,
              versatile SUV, rugged truck, or sporty coupe. <br />
              Safety features, reliability, and resale value should be part of your evaluation process. Read reviews, check safety ratings, and
              inspect used cars if applicable. A test drive is essential to assess comfort, handling, and overall driving experience. Negotiate prices
              wisely, review contracts, and consider financing options. Lastly, think about the long-term costs of ownership, including depreciation
              and maintenance. By carefully considering these factors, you can make an informed choice and find a car that aligns with your individual
              needs and preferences.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Is Available For test Drive?</div>
          <div className="collapse-content">
            <p>NO.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">How to sign up?</div>
          <div className="collapse-content">
            <p>
              To sign up for an online service or platform, begin by visiting the website or app. Locate the "Sign Up" or "Register" button and click
              it. You'll be prompted to provide personal information, such as your name, email address, and a secure password. Follow any additional
              instructions for verification or security measures, such as confirming your email or setting up two-factor authentication. Read and
              accept the terms of service and privacy policy. Once completed, submit your information, and you'll receive a confirmation, typically
              via email. Click the confirmation link, and your sign-up process is complete. You can now log in with your credentials and access the
              platform's features and services.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="uppercase bg-[#D81517] text-white text-base p-5 hover:bg-gray-600 font-semibold">Make a question</button>
      </div>
    </div>
  );
};

export default FAQ;
