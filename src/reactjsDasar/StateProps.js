import React from 'react'
import Operan from './Operan'

export default class StateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: 'Bakso',
      minuman: 'Es-teh'
    }
  }
  gantiMakanan = (makanan_baru, minuman_baru) => {
    this.setState({
      makanan: makanan_baru,
      minuman: minuman_baru,
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.makanan}, {this.state.minuman}</h2>
        <button onClick={() => this.gantiMakanan('Ikan', 'Kopi')}>Ganti Makanan</button>
        <Operan makanan={this.state.makanan} />
      </div>
    )
  }
}