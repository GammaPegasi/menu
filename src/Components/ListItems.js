import React, { Component } from "react";

class ListItems extends Component {
	render() {
		console.log("**x ", this.props);
		return this.props.data.map(function(item, i) {
			return (
				<li key={i}>
					{" "}
					{item.name} ... $ {item.price}{" "}
				</li>
			);
		});
	}
}

// class ListItems222 extends Component {
// 	render() {
// 		console.log("-->", this.props.data);
// 		return (
// 			<div>
// 				{" "}
// 				<ListIt props={this.props} />{" "}
// 			</div>
// 			// <div> ListIt  </div>
// 		);
// 	}
// }

export default ListItems;
