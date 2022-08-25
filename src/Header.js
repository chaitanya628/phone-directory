import React from "react";
const Header = function()
{
    const headerstyle= {textAlign:'center',padding: 20, background:'black',color:'white',textTransform:'uppercase',fontWeight: 500,fontSize:'large'};
    return (
        <div style={headerstyle}>
            Phone Directory
        </div>
    )
}
export default Header;