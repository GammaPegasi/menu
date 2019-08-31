import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { BrowserRouter as Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
class Menu extends React.Component {
  render() {
    // console.log(JSON.stringify(this.props, null, 3));

    const flag = this.props.parentMenu !== undefined;
    const parent = this.props.parentMenu;
    let callme = this.props.callback;
    // const callme = () => {};

    let str = this.props.val.map(function(item, i) {
      if (!flag) {
        if (i === 0) {
          return (
            <div>
              <Link to={`/${item.name}`}> {item.name}</Link>{" "}
            </div>
          );
        } else return <div onClick={callme}>{item.name}</div>;
      } else
        return (
          <div>
            <Link to={`/${parent}#${item.name}`}> {item.name}</Link>{" "}
            {/* <Link to={`#${item.name}`}> {item.name}</Link>{" "} */}
          </div>
        );
    });

    return <div class={this.props.class}> {str} </div>;
  }
}

export default Menu;
