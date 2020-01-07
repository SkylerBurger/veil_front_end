import React, { Component } from 'react';
import './position.css'
class Position extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="position">
                <div className='card-border'>
                    <img src='img/Back.jpg' className="card-image card-back" />
                    {/* <img src='img/Back.jpg' className="card-image card-back" /> */}
                </div>
                <h3 className='label'>Future</h3>
                <h4>Card Back</h4>
            </div>
        )
    }
}

export default Position