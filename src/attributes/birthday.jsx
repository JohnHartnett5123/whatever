import React, { Component } from 'react';

class Birthday extends Component {
    render() {
        return (
            <div className="card my-4">
                <div className="card-header">Bithday</div>
                <div className="card-body">
                    <p>Date departed from infinite darkness: {this.props.date}</p>
                    <p>Happy Birthday{`${this.props.isHappy}`}</p>
                    { this.props.children }

                </div>
            </div>
        )
    }
}

export default Birthday;