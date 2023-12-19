 import { useOnline } from "../utils/useOnline";
 import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useContext } from "react";
// import userContext from "../utils/userContext";
// import { CartContext } from "../utils/cartContext";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";


const Header = () => {
  const onlineStatus = useOnline();
  const {cart} =useContext(CartContext);
  //const cartItems=useSelector((store)=>store.cart.items);
  const {loggedInUser}=useContext(userContext);
  

  //console.log(cartItems,'cartitems');
 //const loggedInUser = useContext(userContext);
  //const { cart } = useContext(CartContext);
  //console.log("cart", cart);

  //console.log("logged", loggedInUser);

  return (
    <div className="flex justify-around border border-solid border-black">
      <div className="w-24 h-28">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="header title" />
      </div>

      <ul className="flex items-center">
       <li>OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
      <li className="list-none m-2">
         <Link to="/">Home</Link>
        </li>
        <li className="list-none m-2">
        <Link to="/about">AboutUs</Link>
        </li>
        <li className="list-none m-2">
         <Link to="/contact">ContactUs</Link>
        </li>
        <li className="list-none m-2">
          <Link to="/cart">Cart {cart.length} items</Link>

        </li>
        <li>{loggedInUser}</li>
      
         
        </ul>
      
    </div>
  );
};

export default Header;

/**
 * Default export ---- export default componentName
 * Default import ---- import componentName from "path"
 * Named export ---- export .....
 * Named import ---- import { } from ""
 */