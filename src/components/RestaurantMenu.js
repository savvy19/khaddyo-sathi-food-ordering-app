import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Constant";

const ResturantMenu =()=>{
     const [resInfo, setresInfo] = useState(null);
     //useParams Hook - we are destructuring on the fly, thats why we have written resId, which is there in the swiggy API
     const { resId } = useParams();
     console.log(resId);
   useEffect(()=>{
    fetchMenu();
   },[]);

   const fetchMenu= async ()=>{
    const data = await fetch( MENU_API + resId

      );
    const json =await data.json();
   // console.log(json);
   setresInfo(json);
   };
 if(resInfo === null) return <Shimmer />;
 const {name,city,cloudinaryImageId,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
 const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
 //console.log(itemCards);
 return(
        <div className = "menu">
            
            
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}- {costForTwoMessage}</p>
          
            <h2>{city}</h2>
            <h2>details of menu</h2>
            {/* {itemCards[0].card.info.name} */}
            <ul>
                {itemCards.map((item) => (
                    <li>{item.card.info.name} - {item.card.info.price/100}</li>
                ))};
                
            </ul>
        </div>
    );
};
export default ResturantMenu; 