"use client"
import { useRouter } from "next/navigation";
import { Spin } from "antd";

export default function Home() {
   const router = useRouter();
   setTimeout(() => {
      router.push("/main");
   }, 3000);
   return (
      <>
         <div className=" h-[90vh] w-full flex justify-center items-center">
            <Spin size="large" spinning />
         </div>
      </>
   );
}
