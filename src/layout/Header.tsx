import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import Cart from "../components/Cart";
import { useAppSelector } from "../redux/hook";
import { HiMenu, HiOutlineX } from "react-icons/hi";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { products } = useAppSelector((state) => state.cart);
  const totalQuantity = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.quantity,
    0
  );
  console.log(totalQuantity);
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-14 mx-auto flex justify-between items-center bg-gray-100 rounded-full m-2 max-w-7xl px-6">
      <div>
        <Link to={'/'}>
        <h1 className="font-bold text-blue-600">
          Your <span className="text-black">Shop</span>
        </h1>
        </Link>
      </div>
      <ul className="h-full hidden sm:flex justify-center items-center  gap-5 font-semibold text-indigo-900">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="relative flex gap-4 py-2 z-50">
        <div className="">
        <div className="absolute bottom-8 left-6">
          <p className="flex h-2 w-2 items-center justify-center rounded-full text-xs text-black font-semibold bg-white p-2">
            {totalQuantity}
          </p>
        </div>
        <button
          onClick={toggleCart}
          className="bg-blue-700 flex justify-center items-center p-2 rounded-full"
        >
          {/* Cart Icon */}
          <BsFillCartFill className="text-white " />
        </button>
        {showCart && (
          <div className="absolute right-0 mt-2 w-64 sm:w-80 bg-white p-4 shadow-lg text-black rounded-lg">
            <Cart />
          </div>
        )}
        </div>
         <div className="text-3xl sm:hidden" onClick={() => setOpen(!open)}>
          {
            open ? <span><HiOutlineX /></span>:<span><HiMenu /></span>
          }
        </div>
      </div>
      <div
        className={`content md:hidden bg-white fixed pt-16 z-50 h-screen w-full top-[13%] duration-500 ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        <Link to={'/'}
          className="block text-center text-lg font-semibold pb-2"
        >
          Home
        </Link>
        <Link to={'/products'} className="block text-center text-lg font-semibold pb-2" >
          Products
        </Link>
        <Link to={'/about'} className="block text-center text-lg font-semibold pb-2">
          About
        </Link>
       
      
      </div>
    </nav>
  );
};

export default Header;
