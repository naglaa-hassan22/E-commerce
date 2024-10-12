import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';
import { ToastContainer } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'productdetails/:id', element: <ProductDetails /> },
      ],
    },
    { path: '*', element: <Notfound /> },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={routes} scrollRestoration="manual">
        <ToastContainer />
      </RouterProvider>
    </CartProvider>
  );
}
