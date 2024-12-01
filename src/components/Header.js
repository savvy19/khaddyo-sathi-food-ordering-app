import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TitleComponent =()=>{
    return (<a href="/">
         <h1 id= "title"key="h2">
            Food villa title
            </h1>
       
            </a>
   
    );
}
const HeaderComponent =()=>{
    const [resetButton,setResetButton] = useState("Login");

    //if no dependency array => useeffect will be calledon every render
    //if dependency array is empty [] => useeffect is called on initial render(just once).
    //if dependency array is [btnNameReact] or any local state variable => it will change everytime the local state vaiable is updated.
    useEffect(()=>{
        console.log("use effect called");
    },[])
    return(
        //if you have to use a component inside a component that is called component composition
       
       <div className="header">
            <TitleComponent/>
            {/* {heading2}
            {console.log(a)} */}
             <div className="nav-item">
                <ul>
                    <li>
                       <Link to="/">Home</Link>    
                    </li>
                    <li>
                        {/**Link is a react component like href anchor tag to navigate between parts of application without refrashing the entire page */}
                       <Link to="/about">About</Link> 
                    </li>
                    <li>
                        <Link to ="/contactus">Contact</Link>
                    </li>
                    <li>
                        <Link>Cart</Link>
                    </li>
                    <button className="login" 
                    onClick={()=>{
                       resetButton === "Login" ? setResetButton("Logout") :  setResetButton("Login");
                    }}>{resetButton}</button>
                    
                </ul>
             </div>
        </div>
       
        );
}
    
   

    export default HeaderComponent;