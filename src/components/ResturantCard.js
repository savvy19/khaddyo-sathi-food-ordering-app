import { IMG_CON_URL } from "../Constant"
export const ResturantCardProps =({ name,cuisines,avgRating,cloudinaryImageId})=>{
    // const ResturantCardProps =({ resturant})=>{
     // console.log(props)
        //destructuring my restrurant
       // const{name}=resturant?.info
         return(
             <div className="card">
                 {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                resturant.info?.cloudinaryImageId} />
                 <h2>{name}</h2>
                 <h3>{resturant.info?.cuisines.join(",")}</h3>
                 <h4> {resturant.info?.avgRating}</h4> */}
                 <img src={ IMG_CON_URL +
                cloudinaryImageId} />
                 <h2>{name}</h2>
                 <h3>{cuisines.join(",")}</h3>
                 <h4> {avgRating}</h4>
                 
             </div>
         )
     }
     export default ResturantCardProps;