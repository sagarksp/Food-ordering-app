import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockdata";

const RestaurantCard = (props) =>{
    const {resData }= props;
    const {
        cloudinaryImageId,
        cuisines,
        name,
        costForTwo,
        avgRating,
        deliveryTime

    } = resData?.info;

    return(
        <div className="res-card" style={{backgroundColor:"#F0F0F0"}}>
            <img 
            className="res-logo"
            // image dynamic bnane k liye image k link ko add kr dege concat
            // src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="resimage"/>
            
            src={CDN_URL+cloudinaryImageId
              }
              alt="Biryani"
            />
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime}</h4>
          <h4>{avgRating}  "star⭐"</h4>

          {/* /*   <h3>{resData.data.name}</h3>
          { CUISINES ME COMMA , HOTA H TO ARRAY KI PROPERTY JOIN USE KAREGE }
            <h4>{resData.data.cuisines.join(",")}</h4>
            <h4>{resData.data.costForTwo/100}</h4>
            <h4>{resData.data.avgRating}</h4>
             <h4>{resData.data.deliveryTime}</h4>*/ }

        </div>
    )
};

export default RestaurantCard;