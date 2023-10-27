import { CDN_URL } from "../utils/Constaints";
const RestaurantCard = (props) =>{
    const {resData} = props;

    const {
        name,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        avgRating

    }=resData?.info;

    return(
        <div className="res-card">
            <img className="food-img" src={CDN_URL+ cloudinaryImageId}></img>
            <div className="res-card-name , same">{name}</div>
            <div className="res-card-cuisines ,same">{cuisines.join(" , ")}</div>
            <div className="rating , same">{avgRating} Rating</div>
            <div className="res-card-cost , same">{costForTwo}</div>
        </div>
    );
};

export default RestaurantCard ;