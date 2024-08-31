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
        <div className="m-4 p-4 w-[290px] rounded-lg hover:bg-gray-200 bg-gray-100 ">
            <img 
            className="res-logo rounded-lg"
            // image dynamic bnane k liye image k link ko add kr dege concat
            // src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="resimage"/>
            
            src={CDN_URL+cloudinaryImageId
              }
              alt="Biryani"
            />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4 className="overflow-wrap break-words leading-5 tracking-wide">{cuisines.join(",")}</h4>
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
// i have to create new restaurant card which has promoted label by using old restaurant card

export const RestaurantCardPromoted = (RestaurantCard)=>{
  return(props)=>{
    return(
<div>
  <label className="absolute z-0 bg-black text-white rounded-2xl m-2 p-2">Promoted</label>
  <RestaurantCard {...props}/>
</div>
    )
  }
}

export default RestaurantCard;