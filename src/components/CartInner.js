"use client";

import { IoCartOutline } from "react-icons/io5";

export default function SideCart({CartItems}) { 

return(<div>
<div className="w-full h-[400px]  border-green-900 overflow-y-scroll overflow-x-hidden ">
   <CartItems />
   <CartItems />
   <CartItems />
   <CartItems />
   <CartItems />
   <CartItems />
   <CartItems />
   <CartItems />
   <CartItems />
</div>
<div className=" w-full h-[100px]  border-red-900 relative flex flex-col justify-center items-center">
   <div className=" w-[200px] border-blue-900  flex justify-center items-center text-[19px] gap-[30px] py-[10px]">
      <div>Sub total</div>
      <div>₹89,083</div>
   </div>
   <button
      className="bg-blue-500  text-white px-[16px] py-[5px] rounded-lg  flex justify-center items-center gap-[10px]"
      onClick={() => router.push("/main/cart")}
   >
      Go to Cart <IoCartOutline size={27} />
   </button>
</div>
</div>)

}