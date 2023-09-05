import {
    HiMinus,
    HiOutlinePlus,
    HiOutlineTrash,
  } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { IProduct } from '../types';
import { addToCart, removeFromCart, removeOne } from '../redux/features/cart/cartSlice';
const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
    <div>
    <h1 className="font-medium text-xl py-3">Your Cart</h1>
  {
    products.map((product:IProduct)=>(
     <div key={product._id}>
       <div className="flex divide-y my-2 justify-between gap-4">
    <img src={product.image} className="w-16 h-16 border flex-shrink-0 object-cover" alt="" />
    <div className="flex flex-1 justify-between flex-col">
    <div className="flex justify-between gap-4 text-black">
      <span className="font-bold">{product.name}</span>
      <p>Price: ${product.price}</p>
    </div>
    <div>
    <div className="flex justify-between">
     <div className="flex gap-4 items-center justify-center">
     <button onClick={() => dispatch(addToCart(product))}  className="border rounded-full">
        <HiOutlinePlus size="20" />
      </button>
      <span className="text-lg font-bold text-rose-600">{product?.quantity}</span>
      <button onClick={() => dispatch(removeOne(product))}  className="border rounded-full">
        <HiMinus size="20" />
      </button>
     </div>
      <button
      onClick={() => dispatch(removeFromCart(product))}
      >
        <HiOutlineTrash size="20" />
      </button>
    </div>
    </div>
    </div>
   </div>
    
     </div>
    ))
  }
  <div className="px-2 border-t mt-2 w-full flex flex-col gap-3">
    <p className="text-xl">
    Total Price: {total.toFixed(2)}
      
    </p>
  </div>
  </div>
  
    </>
  )
}
export default Cart