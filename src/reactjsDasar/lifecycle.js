import React from 'react'
import Sublifecycle from './Sublifecycle'


export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: 'Bakso',
      data: {},
      tampilHalamanSub: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json
        })
      })
  }

  ubahmakanan(value) {
    this.setState({
      makanan: value
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {this.state.tampilHalamanSub && <Sublifecycle ubahmakanan={(value) => this.ubahmakanan(value)} />}
        <button onClick={() => this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })}>Tampilkan Halaman</button>
      </div>
    )
  }
}