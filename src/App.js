/*
*
*Hot module Replacement
*File watcher algorithm - c++
*Bundling
*Minify
*cleaning our code
*dev abd production build
*super fast build algorithm
*Image optimization
*Chahing while development
*compression
*HTTPS on dev
*port number
*/
import React from "react";
import ReactDOM  from "react-dom/client";
//default import
import HeaderComponentAlias from "./components/Header"
//Named import
import { TitleComponent } from "./components/Header"

import { IMG_CON_URL } from "./Constant";
import Footer from "./components/Footer"
import Body from "./components/Body";
const heading = React.createElement(
    "h1",
    { 
    id: "title",
    key: "h11"
},
"namste vai!"
);
console.log(heading);
// const heading2 = React.createElement("h2",{ 
//     id: "title",
//     key:"h22"
// },
// "namste vai parcel!"
// );
// console.log(heading2);
// const Container = React.createElement(
//     "div",
//     { 
//     id: "container",
//     hellow:"world", //this is props
// },
// [heading,heading2]
// );

//JSX
const heading2=(<h1 id="title" key ="h22">
    Namste in Jxs</h1>
    );
//React component 
//- Functional component  NEW
//name of component starts with capital letter ,convention
//- Class Based component OLD

const a=10;









    const ResturantCard =()=>{
        return(
            <div className="card">
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg"></img>
                <h2>burger king</h2>
                <h3>Burger, american</h3>
                <h4> 4.2 star</h4>
            </div>
        )
    }

    //-----------after using the props--------
  //   const ResturantCardProps =(props)=>{
  //     console.log(props)
  //     return(
  //         <div className="card">
  //             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
  //             props.resturant.info?.cloudinaryImageId} />
  //             <h2>{props.resturant.info?.name}</h2>
  //             <h3>{props.resturant.info?.cuisines.join(",")}</h3>
  //             <h4> {props.resturant.info?.avgRating}</h4>
  //         </div>
  //     )
  // }

  


     


      
    const AppLayout = ()=>{
        return(
           <>
           <HeaderComponentAlias/>
           <Body/>
           <Footer/>
           </>
           
        );

    }



const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root 
//async and defer
//to render a react element
//root.render(heading2)
//to render a functional component
/**
 * React.Fragment ->
 * since in JSX you can only return one root/parent Element from a component so you put it in the div . 
 * now you dont a div again inside the root element 
 * so what you use a Component called React.Fragment which is getting imported from Import React.
 * so you keep your h1,div inside the
 * <React.Fragment>
 * <h1></h1>
 * <h2></h1>
 * </React.Fragment>
 * it is like a empty tag .
 * now we don't always want to write this so we keep our h1,h2 in a empty tag,eg below
 * 
 * <>
 * <h1>gi/h1>
 * <h2>hello</h1>
 * </>
 */
/**
 * Inline Styling in react ->
 * 
 * const styleObj={
 * backgroundColour: "red";
 * }
 * const jsx = (
 * <div style={styleObj}>
 *      <h1>JSX</h1>
 *  </div>
 * );
 * 
 */
/**
 * 
 * 
 */



root.render(<AppLayout/>);