"use client";
import React, { useContext } from "react";
import { Input } from "antd";
import { CiSearch, CiGrid41 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartContextData } from "@/context/CartContext";

export default function NavBar() {
   const router = useRouter();

   const cartData = useContext(CartContextData);

   return (
      <div className="hidden w-full p-[20px]  border-b-2 border-gray-200 md:flex lg:flex justify-center items-center gap-[40px] hover:cursor-pointer">
         <Image
            alt="logo"
            src={logo}
            width={160}
            height={190}
            onClick={() => router.push("/main")}
         />
         <div>
            <Input
               placeholder="Search for products"
               size="large"
               style={{ width: "400px", background: "#e6e6e6" }}
               prefix={<CiSearch size={20} onClick={() => alert("jd")} />}
            />
         </div>
         <div className=" flex justify-center items-center gap-[7px] rounded-2xl px-[10px] py-[5px] hover:cursor-pointer hover:bg-gray-300">
            <CiGrid41 size={27} /> Categories
         </div>
         <div
            className=" flex justify-center items-center gap-[7px] rounded-2xl px-[10px] py-[5px] hover:cursor-pointer hover:bg-gray-300 relative"
            onClick={() => router.push("/main/cart")}
         >
            <IoCartOutline size={27} /> Cart
            {(cartData?.cartItemsState.length ?? 0) > 0 && (
               <div className=" absolute text-[12px] top-[0px] left-[3px] rounded-[50%] w-[20px] h-[20px] p-[10px] flex justify-center items-center bg-blue-500 text-white ">
                  <div>{cartData?.cartItemsState.length}</div>
               </div>
            )}
         </div>
      </div>
   );
}
