"use client";
import React from "react";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import truck from "../../assets/truck.svg";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavMobile() {
   const router = useRouter();
   return (
      <div className=" md:hidden lg:hidden p-[10px] pt-[20px]  flex flex-col gap-[10px] justify-center items-center hover:cursor-pointer bg-white">
         <div className=" flex gap-[60px] justify-center items-center min-h-[42px]">
            <Image
               alt="logo"
               src={logo}
               width={160}
               height={190}
               onClick={() => router.push("/main")}
            />
            <div className="flex gap-[10px] justify-center items-center">
               <Image alt="track" src={truck} width={47} height={47} />
               <Image
                  alt="cart"
                  src={cart}
                  width={47}
                  height={47}
                  onClick={() => router.push("/main/cart")}
               />
            </div>
         </div>
      </div>
   );
}
