const TopRatedRestaurants = (props)=>{
    

    function getTopRatedRestaurant(){
        const topRatedRestaurants=props.filteredRestaurants.filter((restuarant)=>restuarant.info.avgRating>4);
          console.log(topRatedRestaurants);
        props.topRatedRestaurants(topRatedRestaurants);
    }


    return (
        <>
        <button  className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" onClick={getTopRatedRestaurant}>TopRatedRestaurants</button>
        </>
    )

}

export default TopRatedRestaurants;