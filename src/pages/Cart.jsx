import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const[totalAmount, setTotalAmount]= useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  
  return (
    <div>
  {
    cart.length > 0 ?
    <div>

      <div>
      {
        cart.map((item,index)=>{
          return <CartItem key={item.id} item={item} itemIndex={index}/>
        })
      }
      </div>

      <div className="flex max-w-3xl">
        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total item :{cart.length} </span>
          </p>
        </div>
        
        <div>
          <p>Total Amount {totalAmount}</p>
        </div>
      </div>

    </div>:
    
    (<div className="flex items-center justify-center mx-auto flex-col h-[60vh]">
      <h1 className="text-bold my-2">Cart is Empty</h1>
      <NavLink to ={"/"}>
        <button className="bg-green-600 rounded-lg text-white font-bold p-3 pr-3">Show Now </button>
      </NavLink>
    </div>)
  }
    </div>
  );
};

export default Cart;
