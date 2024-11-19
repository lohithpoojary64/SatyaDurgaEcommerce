import React from "react";
import { Button } from "antd";

const ProceedButton = () => {
  return (
    <div className="bg-white px-[20px] h-[70px] lg:h-[30px]">
      <Button
        type="primary"
        className="bg-customBlue !h-[40px] lg:!h-[30px] w-[100%] rounded-xl lg:rounded-md"
      >
        Proceed
      </Button>
    </div>
  );
};

export default ProceedButton;

