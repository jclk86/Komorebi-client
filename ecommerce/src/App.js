import React, {Component} from 'react';
import './App.css';
import StripeBtn from "./StripeBtn/StripeBtn";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Stripe Checkout - ReactJS</p>
          <StripeBtn />
        </header>
      </div>
    );
  }

}

export default App;
