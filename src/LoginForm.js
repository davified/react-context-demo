import React, { Component } from "react";
import MyContext from "./MyContext";

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

export default LoginForm;
