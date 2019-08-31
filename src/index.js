import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
// import { MainMenuData } from "./Components/data";
import { MainMenuData } from "./Components/datasp";

import Menu from "./Components/Menu";
import PageItems from "./Components/ListItems";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// console.log(Menu);
class App extends React.Component {
	render() {
		return <Main />;
	}
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mainMenuData: MainMenuData,
			ptr: 0,
			selectedMainItem: MainMenuData[0]
		};
		this.actionLink = this.actionLink.bind(this);
		this.actionChangeMenu = this.actionChangeMenu.bind(this);
	}

	actionLink = () => {
		this.setState({
			// ptr: (this.state.ptr + 1) % 4,
			// selectedMainItem: MainMenuData[this.state.ptr]
		});
	};

	actionChangeMenu = e => {
		var tmp = this.state.mainMenuData.findIndex(
			x => x.name === e.target.textContent.trim()
		);
		this.setState({
			ptr: tmp,
			selectedMainItem: MainMenuData[tmp]
		});
		// console.log(e.target.textContent.trim(), this.state.ptr);
		// e.preventDefault();
		// e.stopPropagation();
	};

	render() {
		return (
			<Router>
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<Menu
								callback={this.actionChangeMenu}
								val={MainMenuData}
								class="mainMenu"
							/>
							{/* <h5> {this.state.selectedMainItem.name} </h5> */}

							<Menu
								parentMenu={this.state.selectedMainItem.name}
								val={this.state.selectedMainItem.menu}
								class="secMenu"
							/>
						</div>
					</div>
				</div>

				<div class="container itemsContainer">
					<div class="row">
						<div class="col-sm-12">
							<PageItems data={this.state.selectedMainItem.menu} />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
