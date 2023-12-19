import React, { useEffect } from "react";

const Profile=()=>{

    const [count,setCount]=React.useState(1);
    const updateCount =() =>{
        console.log("count has been updated");
        setCount(2);
    }

    useEffect(()=>{
     setCount(count+1);

     const timer=setInterval(()=>{
        console.log("interval call");
     },1000);

     return()=>{
        console.log("functional component unmounted");
        clearInterval(timer);
    }
    },[])

    

    

    return (
        
        <>
        <>Profile</>
        <h3>{count}</h3>
        <button onClick={updateCount} style={{background:"black"}}>Update function</button>
        </>
    )
}

export default Profile;