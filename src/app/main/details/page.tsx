"use client";
import CustomButton from "@/components/customButton/CustomButton";
import Header from "@/components/header/Header";
import ItemCard from "@/components/ItemCard";
import PaymentFooter from "@/components/PaymentFooter";
import { Button, Checkbox, Form, Input } from "antd";
import type { FormProps } from "antd";
import { useState } from "react";

type FieldType = {
   pincode?: string;
   name?: string;
   mobile?: number;
   email?: string;
   address?: string;
   locality?: string;
   landmark?: string;
   city?: string;
   state?: string;
};

export default function Home() {
   return (
      <>
         <div className="overflow-x-hidden relative md:ml-[200px]">
            <div className=" absolute left-0 top-0 md:hidden lg:hidden">
               <Header title="Shipping Details" showIcon={false} />
            </div>
            <div className="hidden lg:block md:block m-[10px] mb-[8px] text-[20px] font-bold">
               Shipping Details
            </div>
            <FormComponent />
         </div>
         <PaymentFooter />
      </>
   );
}

type propsType = {
   name: string;
   required: boolean;
};
const CustomLabel = ({ name, required }: propsType) => {
   return (
      <div className=" text-[17px]">
         {name} {required && <span className=" text-red-500">*</span>}
      </div>
   );
};

const FormComponent = () => {
   const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      console.log("Success:", values);
   };

   const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };
   return (
      <div className=" md:w-[1200px] lg:w-[1200px] border- border-red-900">
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 500, position: "relative" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
         >
            <div className=" flex items-center gap-[10px]">
               <div className=" border- border-green-800 md:w-[700px] lg:w-[700px] p-[10px] pt-[50px] md:pt-[0]">
                  <CustomLabel name={"Pincode"} required={false} />
                  <Form.Item<FieldType> name="pincode" className="md:w-[1000px]">
                     <Input type="number" size="large" placeholder="Enter Pincode" />
                  </Form.Item>

                  <div className="md:flex  md:w-[500px] ">
                     <div className="md:w-[350px]">
                        <CustomLabel name={"Name"} required={true} />
                        <Form.Item<FieldType>
                           name="name"
                           rules={[{ required: true, message: "Name is required" }]}
                           className="md:w-[400px]"
                           style={{ padding: "0" }}
                        >
                           <Input size="large" placeholder="Enter name" />
                        </Form.Item>
                     </div>

                     <div>
                        <CustomLabel name={"Mobile number"} required={true} />
                        <Form.Item<FieldType>
                           name="mobile"
                           rules={[{ required: true, message: "Mobile number is required" }]}
                           className="md:w-[478px]"
                        >
                           <Input size="large" placeholder="Enter Mobile number" type="number" />
                        </Form.Item>
                     </div>
                  </div>

                  <CustomLabel name={"Email"} required={true} />
                  <Form.Item<FieldType>
                     name="email"
                     rules={[{ required: true, message: "Email is required" }]}
                     className="md:w-[1000px]"
                  >
                     <Input size="large" placeholder="Enter email" type="email" />
                  </Form.Item>

                  <CustomLabel name={"Address"} required={true} />
                  <Form.Item<FieldType>
                     name="address"
                     rules={[{ required: true, message: "Address is required" }]}
                     className="md:w-[1000px]"
                  >
                     <Input size="large" placeholder="Enter Address" />
                  </Form.Item>

                  <div className="md:flex md:w-[300px] ">
                     <div className="md:w-[350px]">
                        <CustomLabel name={" Locality / Area (optional)"} required={false} />
                        <Form.Item<FieldType> name="locality" className="md:w-[400px]">
                           <Input size="large" placeholder="Enter Locality" />
                        </Form.Item>
                     </div>
                     <div>
                        <CustomLabel name={"Landmark (optional)"} required={false} />
                        <Form.Item<FieldType> name="landmark" className="md:w-[479px]">
                           <Input size="large" placeholder="Enter Landmark" />
                        </Form.Item>
                     </div>
                  </div>

                  <div className="md:flex md:w-[300px] ">
                     <div className="md:w-[350px]">
                        <CustomLabel name={"City"} required={true} />
                        <Form.Item<FieldType>
                           name="city"
                           className="md:w-[400px]"
                           rules={[{ required: true, message: "City is required" }]}
                        >
                           <Input size="large" placeholder="Enter city" />
                        </Form.Item>
                     </div>
                     <div>
                        <CustomLabel name={"State"} required={true} />
                        <Form.Item<FieldType>
                           name="state"
                           className="md:w-[479px]"
                           rules={[{ required: true, message: "State is required" }]}
                        >
                           <Input size="large" placeholder="Enter State" />
                        </Form.Item>
                     </div>
                  </div>
                  <div className=" md:hidden w-[366px]">
                     <BillingCard />
                  </div>
               </div>

               <div className="hidden md:block lg:block border-2 border-gray-300 w-[400px] h-[440px] p-[10px] rounded-xl">
                  <BillingCard />
               </div>
            </div>
         </Form>
      </div>
   );
};

const BillingCard = () => {
   return (
      <div className=" flex flex-col gap-[10px] text-[16px] border-t-4 md:border-t-0 border-gray-300 mt-[40px] pt-[20px] md:pt-0">
         <div className=" flex justify-between">
            <div>Item total</div>
            <div>₹63,256</div>
         </div>
         <div className=" flex justify-between">
            <div>Conveyence charges (5%)</div>
            <div>₹344</div>
         </div>
         <div className=" flex justify-between">
            <div>GST</div>
            <div>₹7,324</div>
         </div>
         <div className=" flex justify-between">
            <div>Delivery fee</div>
            <div>₹7,423</div>
         </div>
         <div className=" flex justify-between">
            <div>Shipping charges</div>
            <div>₹72,234</div>
         </div>
         <div className=" border-t-2 border-dashed border-gray-300">
            <div className="flex justify-between">
               <div>
                  <div className="text-[20px] font-bold">Grand Total</div>
                  <div>Inclusive of all taxes</div>
               </div>
               <div className="text-[20px] font-bold">₹53,600</div>
            </div>
            <div className="mt-[20px]">Average delivery time: 3-5 Days</div>
         </div>
         <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            style={{ marginRight: "270px", marginTop: "30px" }}
         >
            <Button
               style={{ border: "none", margin: "0", padding: "0", color: "black" }}
               htmlType="submit"
            >
               <CustomButton title="Proceed" />
            </Button>
         </Form.Item>
      </div>
   );
};
