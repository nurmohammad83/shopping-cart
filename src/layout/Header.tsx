import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="h-14 mx-auto flex justify-between items-center bg-gray-100 rounded-full m-2 max-w-7xl px-5">
      <div>
        <h1 className="font-bold text-rose-700">Your Shop</h1>
      </div>
      <ul className="h-full flex justify-center items-center  gap-3 font-semibold text-indigo-900">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>
        <Link to="/cart">
          <li
            title="cart"
            className="bg-rose-700 flex justify-center items-center p-2 rounded-full"
          >
            <BsFillCartFill className="text-white " />
          </li>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
