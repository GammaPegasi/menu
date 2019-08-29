import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import { MainMenuData } from "./Components/data";
import Menu from "./Components/Menu";
import ListItems from "./Components/ListItems";

console.log(Menu);
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mainMenuData: MainMenuData,
			ptr: 0,
			selectedMainItem: MainMenuData[0]
		};
		this.actionLink = this.actionLink.bind(this);
	}

	actionLink = () => {
		this.setState({
			ptr: (this.state.ptr + 1) % 4,
			selectedMainItem: MainMenuData[this.state.ptr]
		});
		console.log(JSON.stringify(this.state, null, 3));
	};

	render() {
		return (
			<div>
				<button onClick={this.actionLink}> inc </button>

				<Menu
					data={MainMenuData}
					callback={function() {
						return alert("as");
					}}
				/>

				<hr />
				<h5> {this.state.selectedMainItem.name} </h5>

				<Menu
					name={this.state.selectedMainItem.name}
					data={this.state.selectedMainItem.menu}
					callback={() => alert("as")}
				/>
				<hr />
				<ListItems
					data={this.state.selectedMainItem.menu[0].menu}
					callback={() => alert("as")}
				/>

				{/* <pre style={{color: 'white'}}>
				 {JSON.stringify(this.state.selectedMainItem.menu[0], null, 3)}
				 </pre> */}

			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
