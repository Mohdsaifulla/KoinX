import React from "react";

const AboutCoin = ({ name, data }) => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">About {name}</h1>
      </div>
      <div className="pt-4">
        <h2 className="font-semibold text-lg">what is {name}</h2>
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
        <div className="flex sm:flex-row flex-col gap-4 justify-between items-center">
          <div>
            <div className="bg-green-100 shadow-xl rounded-lg flex justify-between items-center">
              <div className="rounded-lg">
                <img
                  src="/images/koinx1.jpg"
                  alt="img1"
                  className="p-4 rounded-xl overflow-hidden"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">Calculate Your Profits</h2>

                <div className="card-actions">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-xl bg-red-100 rounded-lg flex justify-between items-center">
              <div>
                <img
                  src="/images/koinx2.jpg"
                  alt="img1"
                  className="p-4 rounded-xl"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">Calculate Your Tax liabiltiy</h2>

                <div className="card-actions">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoin;
