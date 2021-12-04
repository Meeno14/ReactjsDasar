import React from 'react'

export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Mobil: 'BMW, Tesla, Lexus'
        }
    }
    gantiMobil = (Mobil_) => {
        this.setState({
            Mobil: Mobil_
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.Mobil}</h2>
                <button onClick={() => this.gantiMobil('Mercedes, Lamborgini')}>Ganti Mobil</button>
            </div>
        )
    }
}