import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";

import Footer from "./components/Footer.jsx";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@nutui/nutui-react/dist/style.css";
import Details from "./pages/Details.jsx";
import Order from "./pages/Order.jsx";
import Pay from "./pages/Pay.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
import MyOrder from "./pages/MyOrder.jsx";

import Wx from "./pages/Wx.jsx";
import Zfb from "./pages/Zfb.jsx";
import Qpay from "./pages/Qpay.jsx";
import Cg from "./pages/Cg.jsx";
import Adim2 from "./adim2/Adim2.jsx";
import AdimLogin from "./adim2/AdimLogin.jsx";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/pay",
      element: <Pay />,
    },
    {
      path: "/pay/wx",
      element: <Wx />,
    },
    {
      path: "/pay/zfb",
      element: <Zfb />,
    },
    {
      path: "/myOrder",
      element: <MyOrder />,
    },
    {
      path: "/qzf/:id",
      element: <Qpay />,
    },
    {
      path: "/cg",
      element: <Cg />,
    },
    {
      path: "/admin",
      element: <Adim2 />,
    },
    {
      path: "/adimLogin",
      element: <AdimLogin />,
    },
  ]);
  // console.log(window.location.pathname); // 输出当前页面的路径部分
  // useEffect(() => {
  //   console.log(window.location.pathname === "/adim");
  //   if (window.location.pathname === "/adim") {
  //     setAdim(true);
  //   } else setAdim(false);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [window.location.pathname]);
  return (
    <>
      <AuthProvider>
        <div className="app">
          <div className="container">
            <RouterProvider router={router} />
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
