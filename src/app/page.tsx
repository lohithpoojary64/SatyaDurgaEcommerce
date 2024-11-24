"use client"

import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar";

export default function Home() {

   return (
      <>
         <div className=" min-h-screen h-screen w-full">
            <Navbar />
            <Header />
         </div>
      </>
   );
}
