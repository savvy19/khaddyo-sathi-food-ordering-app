   import { useState } from "react";
   import { restaurantsList } from "../Constant";
   import ResturantCardProps from "./ResturantCard";
   //props - properties
   const Body =() =>{
   //
   //searchInput is a local state variable
   const [searchInput,setsearchInput] =useState("KFC") //to create a state variable we use this perticular hook
    const[resturants,setResturants]=useState(restaurantsList)
   return (
      <>
      <div className="search-container">
        <input type ="textbox" className="searh-input"
        placeholder="Search" value= {searchInput} 
        onChange={(e)=>{
          setsearchInput(e.target.value);   //here we writing search text  and in below in h5 tag  we are reading search text , 
                                             //  it is called two way binding
        }}/>
        <button className="search-btn"
        onClick={()=>{

        }}>search</button>
        
        <h5>{searchInput} </h5>        
      </div>
      <div className="resturant-list">
        {/* <ResturantCardProps resturant ={restaurantsList[0]} hello="world"/>
        <ResturantCardProps resturant ={restaurantsList[1]} /> */}
         {/* <ResturantCardProps {...restaurantsList[0]?.info}/>
        <ResturantCardProps {...restaurantsList[1]?.info} /> */}
       {/* {restaurantsList.map((restu) =>  {
          return  <ResturantCardProps {...restu?.info} key = {restu.info.id} />
        })} */}

          {resturants.map((restu) =>  {
                    return  <ResturantCardProps {...restu?.info} key = {restu.info.id} />
                  })}
      </div>
      </>
    )
   // return <ResturantCard/>

};
export default Body;