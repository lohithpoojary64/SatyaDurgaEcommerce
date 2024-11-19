"use client";
import Image from "next/image";
import itemImage from "../../assets/item.svg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import { useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ItemCard from "./ItemCard";
import { CartContextData } from "@/context/CartContext";
export default function SideCart() {
   const containerRef = useRef(null);
   const router = useRouter();
   const [isClose, setIsClose] = useState(false);
   const cartData = useContext(CartContextData);
   
   const subtotal = cartData?.cartItemsState.reduce((sum, item) => {
      return sum + (item.price * (item.count || 1)); // Multiply price by count
   }, 0) || 0; // Default to 0 if cartItemsState is undefined

   return (
      <div
         className={`hidden ${
            isClose ? " h-[4.8em] overflow-hidden " : "md:flex lg:flex"
         }  flex-col self-start w-[370px] border-2 border-gray-200 rounded-lg m-[50px] mt-[30px] max-h-[93vh]  z-[300]`}
      >
         <div className=" w-full h-[70px]  border-red-900 text-[24px] p-[20px] flex items-center justify-between">
            <div>Cart</div>
            <div className=" cursor-pointer" onClick={() => setIsClose(!isClose)}>
               {!isClose ? <IoMdCloseCircleOutline title="close" /> : <IoCartOutline />}
            </div>
         </div>
         <div>
            <div className="w-full h-[400px] px-4  border-green-900 overflow-y-scroll overflow-x-hidden ">
               {cartData?.cartItemsState.map(({ name, description, price, img, id }) => {
                  return (
                     <ItemCard
                        name={name}
                        description={description}
                        price={price}
                        id={id}
                        img={img}
                        showImage={false}
                     />
                  );
               })}
            </div>
            <div className="sticky bottom-0 w-full h-[100px]  border-red-900 bg-white flex  justify-between items-center px-4 rounded-lg ">
               <div className="flex flex-col border-blue-900   justify-center items-start text-[19px] gap-[5px] ">
                  <div className="text-sm">Sub total</div>
                  <div className="font-bold">₹{subtotal}</div>
               </div>
               <button
                  className="bg-blue-500  text-white px-[16px] py-[5px] rounded-lg  flex justify-center items-center gap-[10px]"
                  onClick={() => router.push("/main/cart")}
               >
                  Go to Cart <IoCartOutline size={27} />
               </button>
            </div>
         </div>
      </div>
   );
}

const CartItems = () => {
   const router = useRouter();
   const [numberOfItems, setNumberOfItems] = useState(4);
   let title =
      "(BESCOM Inspected) HPL Three phase, 4 wire static watthourddhs meter with 10-60A ratingis the best -60A ratingis the best-60A ratingis the best-60A ratingis the best-60A ratingis the best-60A ratingis the best-60A ratingis the best-60A ratingis the best absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]absolute left-[100px]";
   if (title.length > 65) {
      title = title.substring(0, 90) + "...";
   }
   return (
      <div
         className=" flex justify-center items-center gap-[10px] border-b-2 border-gray-200 pb-[10px] pt-[10px] cursor-pointer"
         onClick={() => router.push("/main/productDetails")}
      >

         <div className=" flex flex-col justify-center items-center gap-[10px]   border- border-red-900 min-w-[210px] ">
            <div className=" h-[53px] overflow-hidden relative mb-[20px] ">
               {title.length > 65 && (
                  <div className=" absolute right-0 bottom-1 bg-white font-bold md:hidden lg:hidden w-[20px]">
                     ...
                  </div>
               )}
               {title}
            </div>

            <div className=" flex justify-center items-center gap-[130px] relative text-[17px] border- border-red-900 w-[100%]">
               <div className="absolute left-[-2px] bottom-0 font-bold">₹3570</div>
               <div className="flex justify-center items-center gap-[10px] absolute right-[10px] bottom-0 cursor-pointer">
                  {numberOfItems > 0 && (
                     <div
                        className="rounded-[50%]  border-[2px] border-gray-400 w-[25px] h-[25px] flex justify-center items-center p-[2px]"
                        onClick={() => setNumberOfItems((prev) => prev - 1)}
                     >
                        <div className=" border-b-2 w-[8px] border-black "></div>
                     </div>
                  )}
                  <div>{numberOfItems > 0 ? numberOfItems : "Add"}</div>
                  <div
                     className="rounded-[50%] border-[2px] border-gray-400 w-[25px] h-[25px] flex justify-center items-center p-[2px]"
                     onClick={() => setNumberOfItems((prev) => prev + 1)}
                  >
                     <div>+</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
