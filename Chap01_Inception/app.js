import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../Chap01_Inception/app.css";
import cardData from "./src/utils/dummyData";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import About from "./src/components/About";
import NotFoundPage from "./src/components/NotFoundPage";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/ProfileClass";
import Shimmer from "./src/components/Shimmer";
// import Mart from "./src/components/Mart";
const Mart = lazy(() => import("./src/components/Mart"));
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Mart />,
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
