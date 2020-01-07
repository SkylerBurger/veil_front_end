import React, { Component } from 'react';
import Position from '../position/position';
import './table.css';

class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="table">
                <Position />
                <Position />
                <Position />
            </div>
        )
    }
}

export default Table;