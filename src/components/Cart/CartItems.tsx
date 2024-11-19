import React, { useContext } from "react";
import ItemCard from "@/components/ItemCard";
import { CartContextData } from "@/context/CartContext";
import DropDown from "../Cart/WorkOrder";

const CartItems = () => {
  const cartContext = useContext(CartContextData);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cartItemsState } = cartContext;

  return (
    <main className="relative h-[100%] w-[100%]">
      <div>
        {cartItemsState.map((item) => (
          <div key={item.id}> {/* Move the key here */}
            <div className="px-3 py-2">
              <DropDown />
            </div>
            <ItemCard
              id={item.id}
              description={item.description}
              img={item.img}
              price={item.price}
              name={item.name}
              showImage={true}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CartItems;
