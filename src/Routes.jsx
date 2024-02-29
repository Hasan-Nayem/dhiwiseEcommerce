import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import Shop from "pages/Shop";
import Productinside from "pages/Productinside";
import About from "pages/About";
import Contacts from "pages/Contacts";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Myaccoount from "pages/Myaccoount";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Page from "pages/Page";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "productinside",
      element: <Productinside />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contacts",
      element: <Contacts />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "myaccoount",
      element: <Myaccoount />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "page",
      element: <Page />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
