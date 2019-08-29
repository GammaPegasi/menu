import React, { Component } from "react";

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foo: false
		};
	}

	render() {
		console.log("**x ", this.props);
		return this.props.data.map(function(item, i) {
			return <li key={i}> {item.name} </li>;
		});
	}
}
export default Menu;
