//menu_data.cards[2].groupedCard.cardGroupMap.Regular.cards[1].card.card;

import { useParams } from "react-router-dom";
import {useState} from "react";
import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_IMG_URL } from "../utils/constant";
//import { useDispatch } from "react-redux";
//import { addItem } from "../utils/cartSlice";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";



const RestaurantDetail =()=>{

    const { id } = useParams();

    //.const dispatch=useDispatch();
    const { addToCart,removeFromCart } =useContext(CartContext);

    const {loggedInUser}=useContext(userContext);
    console.log(loggedInUser);
    
   // const [restMenuItems,setRestMenuItems]=useState([]);


   const handleAddItem =(item)=>{
    console.log(item,"additem");
     // dispatch(addItem(item));
     addToCart(item);
     
   }

   const handleRemoveItem=(item)=>{
    console.log(item,"remove Item");
    removeFromCart(item)
   }

    const menu_data=useRestaurantMenu(id);
    if(menu_data===null) return <Shimmer />

    console.log(id,"idretaurantdetails");
    console.log(menu_data,"menu_data_full");
//[2]?.card?.card?.gridElements?.infoWithStyle
//?.cards[1]?.card?.card?.itemCards
 console.log(menu_data.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.categories[0].itemCards,"menudata");
     
    
    const itemCards=menu_data.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.categories[0].itemCards;

    console.log(itemCards,"menudata");
    //setRestMenuItems(itemCards);
    return (
       <div className="flex text-center">
        <div className="rest-menu-list">

            <div>Restaurant details</div>

   
            {itemCards && <Shimmer />}
            {itemCards.map((item)=>(
    
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                  <div className="w-9/12">
                    <div className="py-2">
                     <span>{item.card.info.name}</span>
                     <span>-2{item.card.info.price ? item.card.info.price/100: item.card.info.finalPrice /100}</span></div>
                     <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="p-2 mx-16 rounded-lg bg-block text-white shadow-lg" onClick={()=>handleAddItem(item)}>Add +</button>
                    <button className="p-2 mx-16 rounded-lg bg-block text-white shadow-lg" onClick={()=>handleRemoveItem(item)}>Remove -</button>
                </div>
                <img src={CDN_IMG_URL + item.card.info.imageId} className="w-full" />
                </div>
            </div>
            ))}
            </div>
            </div>
            
    )
            }
    
    
    



export default RestaurantDetail;