"use client";
import React from "react";
import CartItems from "@/components/Cart/CartItems";
import PriceSummary from "@/components/Cart/PriceSummary";
import GrandTotal from "@/components/Cart/GrandTotal";
import Button from "../../../components/ProceedButton";
import Navbar from "@/components/Cart/Navbar";
import ItemsTotal from "@/components/Cart/ItemsTotal";

const page = () => {
  return (
    <main className="min-h-full h-screen bg-slate-100">
      <div className="lg:flex lg:flex-col lg:items-center h-full">
        <div className="lg:relative lg:w-[55%] h-full">
          <div>
            <Navbar url="Your Items" path="/main" />
          </div>
          <div className="lg:flex  lg:justify-between   lg:mt-3">
            <div className="">
              <CartItems />
            </div>
            <div className="lg:border lg:border-solid lg:border-slate-200 lg:p-1 lg:rounded-lg lg:bg-white lg:w-[280px]">
              <PriceSummary />
              <div className="border-t-2 border-dashed border-gray-200 w-[100%] bg-white"></div>
              <GrandTotal />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
