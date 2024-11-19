import React from "react";

const PriceSummary = () => {
  return (
    <main className="bg-white h-[80px] w-[100%] flex justify-between ">
      <div className=" h-[100%] w-[70%] text-sm font-semibold lg:font-medium p-5 lg:p-2">
        <ul className="list-none">
          <li className="mt-2">Item total</li>

          <li className="mt-2">Shipping charges</li>
        </ul>
      </div>
      <div className=" h-[100%] w-[30%] text-sm font-semibold lg:font-medium  p-5 lg:p-2">
        <ul className="list-none">
          <li className="mt-2">₹27,220</li>
          <li className="mt-2">₹999</li>
        </ul>
      </div>
    </main>
  );
};

export default PriceSummary;
