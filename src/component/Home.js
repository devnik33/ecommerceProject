import React from "react";
import { ReactDOM  } from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home=()=>{

    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
        
    )
}


export default Home;