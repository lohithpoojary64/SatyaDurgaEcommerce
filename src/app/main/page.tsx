"use client";
import ItemCard from "@/components/ItemCard";
import NavBar from "@/components/NavBar";
import NavMobile from "@/components/NavMobile";
import SideCart from "@/components/SideCart";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
export default function Home() {
   const data = [
      {
         name: "(BESCOM Inspected) HPL Three phase, 4 wire static watthourddhs meter with 10-60A",
         price: 78252,
         description: "dfdd",
         img: "https://5.imimg.com/data5/SELLER/Default/2021/9/PJ/SE/WZ/131395652/hpl-three-phase-electric-meter.jpg",
         id: "12",
      },
      {
         name: "(BESCOM Inspected) HPL Three phase, 4 wire static watthourddhs meter with 10-60A",
         price: 3300,
         description: "dfdd",
         img: "https://5.imimg.com/data5/SELLER/Default/2021/9/PJ/SE/WZ/131395652/hpl-three-phase-electric-meter.jpg",
         id: "13",
      },
      {
         name: "(BESCOM Inspected) HPL Three phase, 4 wire static watthourddhs meter with 10-60A sdfsdfsdfsdds",
         price:35000,
         description: "dfdd",
         img: "https://tiimg.tistatic.com/fp/1/007/723/electronic-energy-meter-for-electricity-reading-with-digital-display-353.jpg",
         id: "14",
      },
      {
         name: "(BESCOM Inspected) HPL Three phase, 4 wire static watthourddhs meter with 10-60A dfsdfsdf sgsdgs gsdgsdsds",
         price: 54500,
         description: "dfdsdf a dgsdfsfsd",
         img: "https://tiimg.tistatic.com/fp/1/007/723/electronic-energy-meter-for-electricity-reading-with-digital-display-353.jpg",
         id: "15",
      },
      {
         name: "(BESCOM Inspected) HPL Three phase, 4 wire static watthourddhs meter with 10-60A dsdfsdf fsgdsfsdf fsdfdsfs",
         price: 8200,
         description: "dfdfsdfs sgfdgdfsdfd",
         img: "https://5.imimg.com/data5/SELLER/Default/2021/9/PJ/SE/WZ/131395652/hpl-three-phase-electric-meter.jpg",
         id: "16",
      },
   ];

   return (
      <div className=" flex justify-center items-center flex-col">
         <NavMobile />
         <Input
            className=" md:!hidden lg:!hidden"
            placeholder="Search for products"
            size="large"
            style={{ width: "360px", height: "50px", background: "#e6e6e6" }}
            prefix={<CiSearch size={20} onClick={() => alert("jd")} />}
         />
         <div className=" flex justify-center items-center">
            <div className="pt-[20px] h-[700px] md:h-[700px] lg:h-[800px] overflow-scroll border-r-2 border-gray-200 p-[20px] self-start md:ml-[200px] lg:ml-[200px] ">
               <h4 className=" font-bold">Electrical Equipments</h4>
               {data.map((i) => (
                  <ItemCard
                     name={i.name}
                     description={i.description}
                     price={i.price}
                     id={i.id}
                     img={i.img}
                     showImage={true}
                  />
               ))}
            </div>
            <SideCart />
         </div>
      </div>
   );
}
