"use client";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Item {
   id: string;
   name: string;
   description: string;
   price: number;
   img: string;
}

type localCartItem = Item & { count?: number };
type productType = localCartItem[];

interface CartContextType {
   cartItemsState: productType;
   addItemToCart: (product: Item) => void;
   decreaseItemCount: (product: Item) => void;
   removeItemFromCart: (product: Item) => void;
   removeAllCartItems: () => void;
   setCartItemsState: React.Dispatch<React.SetStateAction<productType>>;
}

export const CartContextData = createContext<CartContextType | null>(null);

function CartContext({ children }: { children: ReactNode }) {
   const [cartItemsState, setCartItemsState] = useState<productType>([]);

   useEffect(() => {
      setCartItemsState(JSON.parse(localStorage.getItem("cartItems") || "[]"));
   }, []);

   const addItemToCart = (product: Item) => {
      let cartItems: productType = JSON.parse(localStorage.getItem("cartItems") || "[]");

      // Check if item already exists in cart
      let itemIndex = cartItems.findIndex((item: localCartItem) => item.id === product.id);

      if (itemIndex !== -1) {
         // If item exists, increase the count
         cartItems[itemIndex].count = (cartItems[itemIndex].count || 0) + 1;
      } else {
         // If item does not exist, add it with a count of 1
         const newCartItem: localCartItem = { ...product, count: 1 };
         cartItems.push(newCartItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartItemsState(cartItems);
   };

   const decreaseItemCount = (product: Item) => {
      let cartItems: productType = JSON.parse(localStorage.getItem("cartItems") || "[]");

      let itemIndex = cartItems.findIndex((item: localCartItem) => item.id === product.id);

      if (itemIndex !== -1 && cartItems[itemIndex].count! > 1) {
         // Decrease count if it's greater than 1
         cartItems[itemIndex].count! -= 1;
      } else {
         // If count is 1, remove the item from the cart
         cartItems = cartItems.filter((item: localCartItem) => item.id !== product.id);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartItemsState(cartItems);
   };

   const removeItemFromCart = (product: Item) => {
      let cartItems: productType = JSON.parse(localStorage.getItem("cartItems") || "[]");

      cartItems = cartItems.filter((item: localCartItem) => item.id !== product.id);

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartItemsState(cartItems);
   };

   const removeAllCartItems = () => {
      localStorage.removeItem("cartItems");
      setCartItemsState([]); // Clear the state
   };

   const ContextData = {
      cartItemsState,
      setCartItemsState,
      addItemToCart,
      removeItemFromCart,
      removeAllCartItems,
      decreaseItemCount,
   };

   return <CartContextData.Provider value={ContextData}>{children}</CartContextData.Provider>;
}

export default CartContext;
