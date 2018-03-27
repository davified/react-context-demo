import React, { Component } from "react";
import Nav from "./Nav";
import MyContext from "./MyContext";
import Provider from "./Provider";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <MyContext.Consumer>
              {value => {
                const welcomeMessage = value.viewer
                  ? "Welcome " + value.viewer
                  : "Welcome to React";

                return <h1 className="App-title">{welcomeMessage}</h1>;
              }}
            </MyContext.Consumer>
          </header>
          <div className="App-intro">
            <Nav />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
