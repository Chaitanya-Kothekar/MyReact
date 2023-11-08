import { useState ,useEffect  } from "react";

const RestaurantMenu = () => {

    const[ resInfo , setresInfo] = useState(null);

    useEffect( ()=>{
        fetchMenu();
  } , [] );

  const fetchMenu = async () =>{
    const data = await fetch ("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=422970&submitAction=ENTER");
     const json = await data.json();
     console.log(json);

     setresInfo(json.data);
  }

//   if (resInfo === null) return <ShimmerUi/> ; if resinfo is null than return shimmerui

    return (

        <div className="Menu">
             <h2>{resInfo?.cards[3]?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}</h2>
             <h3>Details</h3>
        </div>
    )
}

export default RestaurantMenu;