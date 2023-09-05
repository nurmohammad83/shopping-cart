import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../redux/api/apiSlice";
import { IProduct } from "../types";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  return (
    <>
      <div className="py-8 sm:py-16">
        <h1 className="text-center text-black font-medium text-4xl">
          Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12 p-5 sm:py-16 sm:px-12">
          {products?.data?.map((product: IProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
          {isLoading && (
            <p className="text-red-600 font-bold text-4xl text-center">
              Loading...
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default Products;
