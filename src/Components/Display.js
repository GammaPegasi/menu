import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h4>Home </h4>;
}
function Drinks() {
  return <h4>Drinks </h4>;
}
function Food() {
  return <h4>Food </h4>;
}
function Services() {
  return <h4>Services </h4>;
}

function Display() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Services" component={Services} />
      <Route path="/Drinks" component={Drinks} />
      <Route path="/Food" component={Food} />
    </div>
  );
}
export default Display;
