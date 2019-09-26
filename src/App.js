import React, { Component } from "react";
import Checkout from "../src/Components/Checkout/Checkout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Checkout
            name={"The Road to learn React"}
            description={"Only the Book"}
            amount={1}
          />
        </header>
      </div>
    );
  }
}

export default App;
