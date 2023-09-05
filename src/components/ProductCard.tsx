import { BsFillCartFill } from "react-icons/bs";
import { IProduct } from "../types";

import { addToCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch } from "../redux/hook";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
    const dispatch = useAppDispatch();
    const handleAddProduct = (product: IProduct) => {
      dispatch(addToCart(product));
    };
  const { name, price, image ,status} = product;
  return (
    <div
      className="bg-white text-gray-700 border min-h-[10rem] transform
transition duration-500 hover:scale-100 justify-center items-center shadow hover:shadow-2xl rounded-md overflow-hidden"
    >
      <img className="h-64 mx-auto object-cover" src={image} alt="" />
      <div className="px-4">
        {/* Badge */}
        <div className="flex items-center my-3 gap-2">
          <span
            className={`${
              status === true ? "text-blue-500" : "text-red-500"
            } px-3 py-1 rounded-full text-xs bg-gray-100`}
          >
            {status === true ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Product Title */}
        <p className="font-semibold text-2xl overflow-ellipsis whitespace-nowrap">
          {name}
        </p>

        {/* price */}

        <div className="py-2">
          <span className="text-xl font-bold">${price}</span>
        </div>
        {/* Button */}
        <div onClick={() => handleAddProduct(product)} className="my-5  flex flex-wrap gap-2">
          <button
            disabled={status === false}
            className={`${
             status === false
                ? "cursor-not-allowed bg-red-500"
                : "bg-blue-500/80 hover:bg-blue-600/90 "
            }  flex-grow border-none py-2 rounded-md text-white font-medium tracking-wider flex justify-center items-center gap-4 transition`}
          >
           <span> Add To Build</span>
           <span> <BsFillCartFill/></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
