import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
    const removeFromCart=()=>{
      dispatch(remove(item.id));
      toast.success("Item Removed");
    }
  return (
    
    <div className="flex  p-2">
      <div className='w-80 m-auto p-auto' >
        <img className='h-40' src={item.image} alt="cartimg"/>
      </div>


      <div className='w-100'>
        <h1 className='font-bold py-3'>{item.title}</h1>
        <h1  className='text-sm'>{item.description.split(" ").slice(0,15).join(" ")+"... "}</h1>
        <div className='flex justify-between mt-6'>
            <p className='text-green-600 font-bold'>${item.price}</p>
            <div>
                <button onClick={removeFromCart}>
                <MdDelete/>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
