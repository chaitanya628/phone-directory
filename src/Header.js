import React from "react";
const Header = function(props)
{
    const headerstyle= {textAlign:'center',padding: 20, background:'black',color:'white',textTransform:'uppercase',fontWeight: 500,fontSize:'large'};
    return (
        <div style={headerstyle}>
            {props.heading}
        </div>
    )
}
export default Header;