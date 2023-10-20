import { useSelector } from "react-redux";
import {NavLink} from"react-router-dom";
import  CartItem from "../components/CartItem"
import { useState } from "react";
import { useEffect } from "react";
const Cart = () => {

  const {cart}=useSelector((state)=>state);
  console.log("Printing Cart");
  console.log(cart);
  const[totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])
  return (
    <div className="flex" >
      {
        cart.length>0 ? 

        (<div className="flex w-[69%]  m-auto p-4">
        <div className="w-[60%]">
          {
          cart.map((item,index)=>{
            return <CartItem key={cart.id} item={item} itemIndex={index}/>
          })
          }
        </div>

        <div className=" flex flex-col p-7 w-[40%] justify-between" >
        <div >
        <div className="text-3xl text-green-600">Your Cart</div>
        <div className="text-5xl text-green-600 font-bold">SUMMARY</div>
        <p className="mt-4">
        <span className="font-semibold">Total Items:{cart.length}</span>
        </p>
        </div>

        <div className="flex-col flex">
          <p className="font-semibold">Total Amount : ${totalAmount}</p>
          <button className="text-lg font-semiboldborder rounded-md px-15 py-2 bg-green-600 text-white
          mt-4 hover:bg-green-400">CheckOut Now</button>
        </div>

        </div>
        
        </div>
        ):
        (<div>
          <h1>Your Cart is Empty!</h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>)
      }
    </div>
    
    
  );
};

export default Cart;
