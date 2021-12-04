import React from 'react'

export default class Sublifecycle extends React.Component {

    componentWillUnmount() {
        this.props.ubahmakanan("Sate")
    }

    render() {
        return (
            <div>
                <h2>Components Sub Lifecycle</h2>
            </div>
        )
    }
}