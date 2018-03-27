import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const MyContext = React.createContext();

class Provider extends Component {
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
      <MyContext.Provider
        value={{
          viewer: this.state.viewer,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

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

class LoginForm extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const { viewer, logIn, logOut } = value;
          return (
            <div>
              {viewer ? (
                <div>
                  <h3>Logged in as: {viewer}</h3>
                  <button onClick={logOut.bind(this)}>Log out</button>
                </div>
              ) : (
                <div>
                  <input
                    placeholder="name please"
                    ref={r => (this.inputRef = r)}
                  />
                  <input
                    type="submit"
                    value="Log In"
                    onClick={() => {
                      logIn(this.inputRef.value);
                    }}
                  />
                </div>
              )}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

const Nav = () => {
  return <LoginForm />;
};

export default App;
