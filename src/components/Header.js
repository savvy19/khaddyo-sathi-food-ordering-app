export const TitleComponent =()=>{
    return (<a href="/">
         <h1 id= "title"key="h2">
            Food villa title
            </h1>
       
            </a>
   
    );
}
const HeaderComponent =()=>(
    //if you have to use a component inside a component that is called component composition
    <div className="header">
        <TitleComponent/>
        {/* {heading2}
        {console.log(a)} */}
         <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
         </div>
    </div>
   
    );

    export default HeaderComponent;