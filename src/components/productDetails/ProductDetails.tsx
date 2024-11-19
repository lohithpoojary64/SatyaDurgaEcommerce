"use client";
import { Button, Carousel } from "antd";
import React, { useState } from "react";
import Header from "../header/Header";

function ProductDetails() {
  const [quantityVisible, setQuantityVisible] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  // const handleQuantityVisibility = () => {
  //   setQuantityVisible(true);
  //   setQuantity(quantity + 1);
  // };
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "290px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius: "10px",
  };
  return (
    <div className="h-auto flex flex-col items-center w-screen lg:w-full lg:h-auto">
      <Header title="Product Details" showIcon={true} />
      <div className=" w-[82%] h-[90%] lg:w-[30%] lg:mt-5 lg:fixed left-3 top-8">
        <Carousel arrows infinite={false}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div className="m-7 p-2 lg:w-[65%] lg:ml-auto lg:-mt-1 ">
        <div className="space-y-3">
          <div className="font-bold">
            HPL three phase, 4 wire LT CT operated static energy meter
          </div>
          <div>
            HPL three phase, 4 wire LT CT operated static energy meter with type
            CT 05, Class 0.5s -/5 A, lb=5A Imax=2xlb 3x240V, 50 Hz with IS 14697
            DLMS complaint Bi-directional meter for solar metering.
            HPL three phase, 4 wire LT CT operated static energy meter with type
            CT 05, Class 0.5s -/5 A, lb=5A Imax=2xlb 3x240V, 50 Hz with IS 14697
            DLMS complaint Bi-directional meter for solar metering.
            CT 05, Class 0.5s -/5 A, lb=5A Imax=2xlb 3x240V, 50 Hz with IS 14697
            DLMS complaint Bi-directional meter for solar metering.
          </div>
          <div className="font-bold text-xl">₹9,110</div>
          <div className="text-red-500 mt-6">
            Only 2 left in stock Hurry up!
          </div>
        </div>
        <div className="flex flex-row gap-6 ml-2 fixed bottom-6 lg:flex-row lg:relative lg:mt-10 lg:-ml-0">
          {quantity > 0 ? (
            <>
              <div
                className="border-2  w-10 flex flex-row justify-center items-center"
                onClick={() => setQuantity(quantity - 1)}
                style={{ borderColor: "#DFDEDE", borderRadius: "9999px" }}
              >
                -
              </div>
              <div className="place-content-center">{quantity}</div>
              <div
                className="border-2  w-10 flex flex-row justify-center items-center"
                onClick={() => setQuantity(quantity + 1)}
                style={{ borderColor: "#DFDEDE", borderRadius: "9999px"  }}
              >
                +
              </div>
            </>
          ) : (
            <Button
              onClick={()=>setQuantity(quantity+1)}
              size="large"
              style={{ borderColor: "black", height: "40px", width: "150px" }}
            >
              Add to cart
            </Button>
          )}
          <Button
            size="large"
            style={{
              backgroundColor: "#146EB4",
              color: "white",
              width: "150px",
            }}
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
