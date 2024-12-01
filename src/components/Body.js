   import { useState, useEffect } from "react";
   import { restaurantsList } from "../Constant";
   import ResturantCardProps from "./ResturantCard";
   import  Shimmer  from "./Shimmer";
   //props - properties
   
   const Body =() =>{
   //
   //searchInput is a local state variable
   const [searchInput,setsearchInput] =useState("") //to create a state variable we use this perticular hook
   // const[resturants,setResturants]=useState(restaurantsList)
   const[resturants,setResturants]=useState([])
   const[filterdResturants,setfilterdResturants]=useState([])
   
   useEffect(()=>{
    fetchData();
    //console.log("useeffect called")
   },[])
   
   const fetchData = async () =>{
    const data = await fetch(
      'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5769763&lng=88.3673359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
     // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5769763&lng=88.3673359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining
    setResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterdResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
  }
//conditional Rendering
  //  if(resturants.length === 0){
  //   return <Shimmer/>;
  //  }
   
    return resturants.length === 0 ? (<Shimmer/>) : (
      <>
      <div className="search-container">
      <div className="search">
        <input type ="textbox" className="searh-input"
        placeholder="Search" value= {searchInput} 
        onChange={(e)=>{
          setsearchInput(e.target.value);   //here we writing search text and in every key press we are reading search text and body is getting rerendered , 
                                             //  it is called two way binding
        }}/> 
        
          <button className="search-btn"
          onClick={()=>{
            const filterData =resturants.filter((res)=>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            setfilterdResturants(filterData);
          }}>
            Search
          </button>
          </div>


        <button className="filter-btn"
        onClick={()=>{
          const filteredList =restaurantsList.filter(
            (res) => res.info.avgRating >4.3
          );
          setResturants(filteredList);
        }}>Top Rated Resturant</button>
        
                
      </div>
      <div className="resturant-list">
        {/* <ResturantCardProps resturant ={restaurantsList[0]} hello="world"/>
        <ResturantCardProps resturant ={restaurantsList[1]} /> */}
         {/* <ResturantCardProps {...restaurantsList[0]?.info}/>
        <ResturantCardProps {...restaurantsList[1]?.info} /> */}
       {/* {restaurantsList.map((restu) =>  {
          return  <ResturantCardProps {...restu?.info} key = {restu.info.id} />
        })} */}

          {filterdResturants.map((restu) =>  {
                    return  <ResturantCardProps {...restu?.info} key = {restu.info.id} />
                  })}
      </div>
      </>
    )
   // return <ResturantCard/>

};
export default Body;