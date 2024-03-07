import React from "react";

const AboutCoin = ({ name, data }) => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">About {name}</h1>
      </div>
      <div className="pt-4">
        <h2 className="font-semibold text-lg">What is {name}</h2>
        <p className="pt-2 text-justify">
          {data?.description?.en?.substring(0, 934)}
        </p>
      </div>

      <div className="pt-4">
        <div>
          <h1 className="font-semibold text-xl p-2">
            Already Holding Bitcoin?
          </h1>
        </div>

        <div className="flex md:flex-row flex-col gap-4 justify-between items-center overflow-x-scroll">
          <div className="bg-green-300 rounded-lg">
            <div className="flex justify-between items-center border">
              <div className="rounded-xl overflow-hidden object-cover">
                <img
                  src="/images/koinx1.jpg"
                  alt="img1"
                  className="p-4 w-full"
                />
              </div>
              <div className="flex flex-col justify-between items-center px-2 p-4 gap-2 text-black">
                <h2 className="font-semibold p-1">
                  Calculate Your Tax Liability
                </h2>
                <button className="bg-white rounded-lg text-center font-semibold">
                  Check Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-red-300 rounded-lg">
            <div className="flex justify-between items-center border">
              <div>
                <img
                  src="/images/koinx2.jpg"
                  alt="img1"
                  className="p-4 rounded-xl w-full"
                />
              </div>
              <div className="flex flex-col justify-between items-center px-2 p-4 gap-2 text-black">
                <h2 className="font-semibold p-1">
                  Calculate Your Tax Liability
                </h2>
                <button className="bg-white rounded-lg text-center font-semibold">
                  Check Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoin;
