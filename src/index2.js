import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import { MainMenu } from "./Components/data";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainMenuBar: MainMenuItems,
            ptr: 3,
            secondaryMenuBar: MainMenuItems[3].secMenuItems
        };
        this.actionLink = this.actionLink.bind(this);
    }

    getIndexMenu = name =>
        this.state.mainMenuBar.findIndex(k => k.title === name);
    // getIndexMenu = (name) => 3;

    getObj = name => this.state.menuItems.find(k => k.title === name);
    actionLink = subMenu => {
        // return null;
        // alert(subMenu + " was clicked > " + this.getIndexMenu(subMenu));
        this.setState({
            // ptr : this.getIndexMenu(subMenu),
            secondaryMenuBar: MainMenuItems[this.getIndexMenu(subMenu)].secMenuItems
        });
        console.log(subMenu + " ptr " + this.state.ptr);
        console.log(JSON.stringify(this.state.secondaryMenuBar, null, 3));
    };

    render() {
        return (
            <BrowserRouter>
                <Navigation
                    menuItems={this.state.mainMenuBar}
                    class="mainMenu"
                    setSecondaryMenue={this.actionLink}
                />
                <Navigation
                    menuItems={this.state.secondaryMenuBar}
                    class="secMenu"
                    setSecondaryMenue={() => null}
                />

                <div className="mainContainer">
                    <Switch>
                        <Route path="/" component={Home} exact />

                        <Route
                            path="/drinks"
                            // render={props => <Product item={Beer} />}
                            render={props => (
                                <Product products={this.state.secondaryMenuBar} name="#" />
                            )}
                            exact
                        />
                        <Route
                            path="/food"
                            render={props => (
                                <Product
                                    // item={Food}
                                    products={this.state.secondaryMenuBar[0]}
                                    name="#"
                                // item={this.state.secondaryMenuBar[0]}
                                />
                            )}
                            exact
                        />

                        {/* <Route path="/hi" render={() => <div> hi </div>} exact />
		<Route path="/contact" component={Contact} exact /> */}

                        <Route component={Error} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
