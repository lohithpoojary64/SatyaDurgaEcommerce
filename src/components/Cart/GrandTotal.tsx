import React from "react";

const GrandTotal = () => {
  return (
    <main className="bg-white h-[150px] lg:h-[130px] w-[100%]">
      <div className="flex justify-between items-center p-5 lg:px-2 lg:py-3">
        <div className="flex flex-col">
          <h1 className="font-bold">Grand total</h1>
          <p className="text-xs">Inclusive of all taxes</p>
        </div>
        <h1 className="font-bold">₹33,727.58</h1>
      </div>
      <div className="text-sm lg:px-2 px-5">
        <p>Average delivery time is <span className="font-bold">3-5 Days</span></p>
      </div>
    </main>
  );
};

export default GrandTotal;
