import React from "react";

function NavBar() {
  // update the JSX being returned!
  let element =<a href="#home">Home</a>
  let about = <a href="#about">About</a>
  return <nav> 
    {element}
    {about}
    </nav>;
}

export default NavBar;
