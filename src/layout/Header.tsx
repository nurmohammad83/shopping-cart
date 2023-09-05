import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import {useState} from 'react'
import Cart from "../components/Cart";
const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <nav className="h-14 mx-auto flex justify-between items-center bg-gray-100 rounded-full m-2 max-w-7xl px-5">
      <div>
        <h1 className="font-bold text-rose-700">Your Shop</h1>
      </div>
      <ul className="h-full flex justify-center items-center  gap-5 font-semibold text-indigo-900">
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
      <div className="relative z-50">
          <button onClick={toggleCart}  className="bg-rose-700 flex justify-center items-center p-2 rounded-full">
            {/* Cart Icon */}
            <BsFillCartFill className="text-white " />
          </button>
          {showCart && (
            <div className="absolute right-0 mt-2 w-64 sm:w-80 bg-white p-4 shadow-lg text-black rounded-lg">
          <Cart />
            </div>
          )}
        </div>
    </nav>
  );
};

export default Header;
