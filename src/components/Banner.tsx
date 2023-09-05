import { Link } from "react-router-dom"
const Banner = () => {
  return (
<section
  className={`relative z-0 bg-[url(https://images.pexels.com/photos/1438865/pexels-photo-1438865.jpeg)] bg-cover bg-center bg-no-repeat`}
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r "
  ></div>

  <div
    className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left ">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Best Collection
        <strong className="block font-extrabold text-rose-700">
          For Home Decoration
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to={'/products'}
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>

        <Link
          to={'/products'}
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}
export default Banner