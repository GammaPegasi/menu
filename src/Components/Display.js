import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function GenericDisplay({ match }) {
  return <div>GenericDisplay ... {`${match.url}`} </div>;
}

function Home() {
  return <div>Home</div>;
}

function Display() {
  return (
    <div>
      <hr />
      <Route path="/Home" component={Home} />
      <Route path="/*/:param" component={GenericDisplay} />

      {/* <Route path="/*" component={GenericDisplay} /> */}
      <div class="myFooter">asfd</div>
    </div>
  );
}
export default Display;
