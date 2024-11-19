import Navbar from "@/components/Cart/Navbar";
import React from "react";
import { Input } from "antd";
import { Button } from "antd";

const page: React.FC = () => {
  return (
    <main className=" min-h-full h-screen bg-white ">
      <div className="relative h-[100%] w-[100%] lg:flex  lg:justify-center lg-items-center">
        <Navbar url="Track Order" />
        <div className="relative px-[20px] mt-5 h-[100%] lg:w-[30%]">
          <h1 className="font-bold text-3xl">
            Track <span className="font-light">your order</span>
          </h1>
          <div className="mt-4">
            <p className="text-xs p-1">Order ID</p>
            <Input placeholder="Enter Order Id" className="h-[45px]" />
          </div>
          <div className="relative bg-white  h-[40px] lg:h-[30px] mt-10">
            <Button
              type="primary"
              className="bg-customBlue !h-[45px] lg:!h-[40px] w-[100%] rounded-xl lg:rounded-md"
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
