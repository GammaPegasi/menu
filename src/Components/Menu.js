import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Menu_in(val) {
  return val.data.map(function(item, i) {
    return (
      <li key={i}>
        {" "}
        <Link to={`/${item.name}`}> {item.name} </Link>{" "}
      </li>
    );
  });
}

function Menu(val) {
  // return <Router> {Menu_in(val)} </Router>
  return Menu_in(val);
}

export default Menu;
