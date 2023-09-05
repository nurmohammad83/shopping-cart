import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Cart from "../pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/cart',
        element: <Cart />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
