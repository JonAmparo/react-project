import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <h3 style={style}>
        <Link to="/">Home</Link>
      </h3>
      <h3 style={style}>
        <Link to="/jokes">jokes</Link>
      </h3>
    </div>
  );
  /* Ep 35. Header Component: Slower using anchor tags rather than Link to='' Tags */
  // return (
  //     <div>
  //         <h3 style={style}><a href='/'>Home</a></h3>
  //         <h3 style={style}><a href='/jokes'>Jokes</a></h3>
  //     </div>
  // )
};

export default Header;
