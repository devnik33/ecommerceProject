import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  createBrowserRouter,RouterProvider,Outlet, UNSAFE_RouteContext
} from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Error from "./component/Error";
import RestaurantDetail from "./component/RestaurantDetail";
import userContext from "./utils/userContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import { CartProvider } from "./utils/cartContext";

import "./App.css";
import Home from "./component/Home";
const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<Home />,
  errorElement:<Error />,
  children:[
    {
      path:"/",
      element:<Body />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"restaurant/:id",
      element:<RestaurantDetail />
    },
    {
      path:"/cart",
      element:<Cart />
    }

  ]
}

])
const App =()=>{
  const [userName,setUserName]=useState("Nikita");
  return (
    <>
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser: userName,setUserName}}>
    <CartProvider>
    <RouterProvider router={appRouter}>
    <Home />
    </RouterProvider>
    </CartProvider>
    </userContext.Provider>
    </Provider>
    </>
    
  )
}


export default App;