import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({
      subject: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input placeholder="Enter Subject"></input>
        <p><b>{this.state.subject}</b> Tutorial</p>

      </div>
    )
  }
}

export default App;
