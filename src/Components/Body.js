import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import reslist from "../utils/mockdata";


const Body = () => {
  const [listofRestaurants, setlistofRestaurant] = useState(reslist);

  const [searchText , setsearchText] = useState();

  useEffect (()=>{
    fetchData();
  } ,[]
  );

  const fetchData = async () => {
    const data = await fetch (
      "https://www.swiggy.com/mapi/homepage/getCards?lat=21.1458004&lng=79.0881546"
      );

      const json = await data.json();
      console.log(json);
      setlistofRestaurant(json.data.success.card);
  };
  
    return(
          <diV className="body">
            <div className="button-section" >
                <button className="filter-btn" onClick={() => {
                    const filtredList = listofRestaurants.filter((res)=>res.info.avgRating>4);
                    setlistofRestaurant(filtredList);
                }}>Top Restaurant</button>
                <div className="search">
                  <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value);
                  }}/>
                  <button onClick={() => {
                   //filter the restaurant to update
                   const  filterdRestaurant= listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                   setlistofRestaurant(filterdRestaurant);

                   
                  }}>Search</button>
                </div>
            </div>
            <div className="res-container">
            {
              listofRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)   //(restaurant) all restaurant will return restaurant card
            }
            </div>
          </diV>
    );
};

export default Body;