import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {  toast } from 'react-hot-toast';
import {remove} from "../redux/Slices/cartSlice"



const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeFromCart =()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }

  return (
  <div className=" max-w-3xl mx-auto">

    <div className="flex border-b justifly-between " >

      <div>
        <img src={item.image} className="h-[180px] "/>
      </div>

      <div className=" ">
        
        <p className="text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</p>
        <p className=" text-gray-400 font-normal text-[10px]">{item.description.split(" ").slice(0,20).join(" ")+"..."}</p>
        
        <div className="flex">
          <div  >
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
          </div>

          <div onClick={removeFromCart}>
            <RiDeleteBin6Line className="bg-red-300 rounded-full text-xl " />
          </div>
        </div>
        
      </div>

    </div>

  </div>
  );
};

export default CartItem;
