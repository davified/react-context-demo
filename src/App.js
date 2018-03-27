import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      viewer: null
    };
  }

  logIn = name => {
    this.setState({ viewer: name });
  };

  logOut = name => {
    this.setState({ viewer: null });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Nav
            viewer={this.state.viewer}
            logIn={this.logIn.bind(this)}
            logOut={this.logOut.bind(this)}
          />
        </div>
      </div>
    );
  }
}

class LoginForm extends Component {
  render() {
    return (
      <div>
        {this.props.viewer ? (
          <div>
            <h3>Logged in as: {this.props.viewer}</h3>
            <button onClick={this.props.logOut.bind(this)}>Log out</button>
          </div>
        ) : (
          <div>
            <input placeholder="name please" ref={r => (this.inputRef = r)} />
            <input
              type="submit"
              value="Log In"
              onClick={() => {
                this.props.logIn(this.inputRef.value);
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

const Nav = props => {
  return <LoginForm {...props} />;
};

export default App;
