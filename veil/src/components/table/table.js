import React, { Component } from 'react';
import Position from '../position/position';
import './table.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position_1: 'past',
            position_2: 'present',
            position_3: 'future',
            image_1: 'img/1 The Magician.jpg',
            image_2: 'img/5 Wands.jpg',
            image_3: 'img/Ace Pentacles.jpg',
            name_1: 'The Magician',
            name_2: '5 of Wands',
            name_3: 'Ace of Pentacles',
        }
    }

    render() {
        return (
            <div className="table">
                <Position 
                    positionName={this.state.position_1}
                    imageSource={this.state.image_1}
                    cardName={this.state.name_1}
                />
                <Position 
                    positionName={this.state.position_2}
                    imageSource={this.state.image_2}
                    cardName={this.state.name_2}
                />
                <Position 
                    positionName={this.state.position_3}
                    imageSource={this.state.image_3}
                    cardName={this.state.name_3}
                />
            </div>
        )
    }
}

export default Table;