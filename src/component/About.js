//import { useState,useEffect } from "react";
import React from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

// const About=()=>{
//     return (

//         <>About
//         <ProfileClass name="anshika" color="red" />
//         <Profile />
//         </>
//     )
// }

class About extends React.Component{
    constructor(props){
        console.log("parent constructor");
        super(props);

        this.state={
            count:0,
        }
    }

    componentDidMount(){
        console.log("parent mount component");
    }

    componentDidUpdate(){
        console.log("parent did update");

    }
    componentWillUnmount(){
        console.log("parent unmount ")
    }

    render(){
        console.log("parent render");
      return(
        <>
        <div>About </div>
        <Profile name="nikitakhatri" color="pink"/>
        <ProfileClass name="nikita" color="blue" />
        </>
      )
    }
  

}

export default About;