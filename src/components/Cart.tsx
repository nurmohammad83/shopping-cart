import {
    HiMinus,
    HiOutlinePlus,
    HiOutlineTrash,
  } from 'react-icons/hi';
const Cart = () => {
  return (
    <>
    <div>
    <h1 className="font-medium text-xl py-3">Your Cart</h1>
  <div className="flex divide-y my-2 justify-between gap-4">
    <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" className="w-16 h-16 flex-shrink-0 object-cover" alt="" />
    <div className="flex flex-1 justify-between flex-col">
    <div className="flex justify-between gap-4 text-black">
      <span className="font-bold">Camerea</span>
      <p>Price: 222</p>
    </div>
    <div>
    <div className="flex justify-between">
     <div className="flex gap-4 items-center justify-center">
     <button  className="border rounded-full">
        <HiOutlinePlus size="20" />
      </button>
      <span className="text-lg font-bold text-rose-600">5</span>
      <button className="border rounded-full">
        <HiMinus size="20" />
      </button>
     </div>
      <button
      >
        <HiOutlineTrash size="20" />
      </button>
    </div>
    </div>
    </div>
   </div>
  
  </div>
   <div className="px-2 border-t mt-2 w-full flex flex-col gap-3">
      <p>Quantity: 5</p>
      <p className="text-xl">
        Total Price:$ {(5 * 3).toFixed(2)}{' '}
        
      </p>
    </div>
    </>
  )
}
export default Cart