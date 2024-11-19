import Image from "next/image";
import visa from "../../assets/paymentIcons/visa.svg";
import rupay from "../../assets/paymentIcons/rupay.svg";
import master from "../../assets/paymentIcons/master.svg";
import upi from "../../assets/paymentIcons/upi.svg";
import { FaLock } from "react-icons/fa";

export default function PaymentFooter() {
   return (
      <div className=" hidden md:block lg:block border-t-2 border-gray-300 w-full h-[100px] absolute bottom-[-40px]">
         <div className="flex justify-between absolute top-[10px] w-full px-[100px]">
            <div className="flex gap-[20px]">
               <Image src={visa} width={60} height={60} alt="visa" />
               <Image src={rupay} width={60} height={60} alt="rupay" />
               <Image src={master} width={60} height={60} alt="master" />
               <Image src={upi} width={60} height={60} alt="upi" />
            </div>
            <div className=" flex justify-center items-center gap-[10px]">
               <FaLock />
               <div>100% secured payments</div>
            </div>
         </div>
      </div>
   );
}
