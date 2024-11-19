"use client";
import Image from "next/image";
import itemImage from "../../assets/item.svg";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContextData } from "@/context/CartContext";


interface ItemCardProps {
   name: string;
   description: string;
   price: number;
   img: string;
   id: string;
   showImage: boolean;
}

export default function ItemCard({ name, description, price, img, id, showImage }: ItemCardProps) {
   const router = useRouter();
   const [numberOfItems, setNumberOfItems] = useState(0);
   let title = name;
   if (title.length > 65) {
      if (showImage) {
         title = title.substring(0, 110) + "...";
      } else {
         title = title.substring(0, 76) + "...";
      }
   }

   const cartData = useContext(CartContextData);
   console.log(cartData?.cartItemsState);

   useEffect(() => {
      let itemIndex = cartData?.cartItemsState.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
         let count = cartData?.cartItemsState[itemIndex ?? 0].count;
         setNumberOfItems(count ?? 0);
      } else {
         setNumberOfItems(0);
      }
   }, [cartData?.cartItemsState]);

   return (
      <div
         className={`flex justify-center items-center gap-[10px] border-b-2 border-gray-300 pb-[10px] pt-[10px] cursor-pointer ${
            showImage ? "p-[10px]" : ""
         } `}
      >
         {showImage && (
            <img
               className="rounded"
               alt="Item"
               src={img}
               width={100}
               height={100}
               onClick={() => {
                  router.push("/main/productDetails");
               }}
            />
         )}
         <div
            className={`flex flex-col justify-center items-center gap-[10px] ${
               showImage ? "min-w-[200px]" : "min-w-[210px]"
            }`}
         >
            <div
               className={` h-[53px] overflow-hidden w-[240px] ${
                  showImage ? "md:w-[400px] lg:w-[460px]" : "md:w-[300px] lg:w-[300px]"
               } relative mb-[20px] border- border-red-900 `}
               onClick={() => {
                  router.push("/main/productDetails");
               }}
            >
               {title.length > 67 && (
                  <div className=" absolute right-0 bottom-1 bg-white font-bold md:hidden lg:hidden w-[20px]">
                     ...
                  </div>
               )}
               {title}
            </div>

            <div className={`flex justify-center items-center gap-[130px] relative text-[17px] border- border-red-900 w-[100%]`}>
               <div className={`absolute left-[10px] ${showImage?"bottom-[-12px]":"bottom-[-6px]"} font-bold`}>₹{price}</div>
               {numberOfItems > 0 ? (
                  <div className={`w-[75px] border-2 rounded border-blue-500 px-1 flex justify-center items-center gap-[10px] absolute right-[10px] ${showImage?"bottom-[-12px]":"bottom-[-6px]"}    cursor-pointer z-[2000]`}>
                     <div
                        className=" w-[25px] h-[25px] flex justify-center items-center p-[2px]"
                        onClick={() =>
                           cartData?.decreaseItemCount({ name, description, price, img, id })
                        }
                     >
                        <div className=" border-b-2 w-[8px] border-black "></div>
                     </div>
                     <div className="flex items-center justify-center text-sm">{numberOfItems}</div>
                     <div
                        className="rounded-[50%] w-[25px] h-[25px] flex justify-center items-center p-[2px]"
                        onClick={() =>
                           cartData?.addItemToCart({ name, description, price, img, id })
                        }
                     >
                        <div>+</div>
                     </div>
                  </div>
               ) : (
                  <div
                     onClick={() => cartData?.addItemToCart({ name, description, price, img, id })}
                     className="w-[75px] border-2 rounded border-blue-500 px-1 flex justify-center items-center gap-[10px] absolute right-[10px] bottom-[-10px] cursor-pointer"
                  >
                     <div className="flex items-center justify-center text-sm w-[25px] px-1">
                        {"ADD"}
                     </div>
                     <div>+</div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
