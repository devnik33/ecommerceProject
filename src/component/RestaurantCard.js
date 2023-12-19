import { CDN_IMG_URL } from "../utils/constant";
import { useContext } from "react";
import userContext from "../utils/userContext";


const RestaurantCard = (props) => {
  // Object destructuring

  console.log(props.details,"nikita details");
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.details;

  console.log("cloudinaryImageID", cloudinaryImageId);
  console.log("name",name);

  const {loggedInUser} = useContext(userContext);

  console.log("context", loggedInUser);

  // template literals

  return (
    <div className="restaurant-card bg-gray-100 rounded-lg">
      <img
        className="rounded-lg"
        src={`${CDN_IMG_URL}${cloudinaryImageId}`}
       alt="" />
      <div className="restaurant-details">
        <div>
          <h2>{name}</h2>
          <h3>{cuisines}</h3>
        </div>
        <div>
          <h3>{avgRating}</h3>
          <h3>{costForTwo}</h3>
          {loggedInUser} 
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;