//use this header whereever necessary
import { Button } from "antd";
import { ArrowLeft, ShoppingCart } from "iconsax-react";
import React from "react";
interface Props {
   title: string;
   showIcon: boolean;
}

function Header({ title, showIcon }: Props) {
   return (
      <div>
         <div className="w-screen bg-white flex flex-row justify-between  h-[20%] p-3">
            <div className="w-[60vw] flex flex-row justify-between lg:space-x-4 lg:justify-start lg:ml-16">
               <div>
                  <ArrowLeft size="25" color="#292D32" />
               </div>
               <div className="text-black font-bold">{title}</div>
            </div>
            {showIcon && (
               <div className="text-black lg:hidden">
                  <Button
                     className="rounded-full bg-[#F2F2F2]"
                     icon={<ShoppingCart size="20" color="#636363" />}
                  />
               </div>
            )}
         </div>
      </div>
   );
}

export default Header;
