import React, { Component } from 'react';
import './position.css'
class Position extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImg: 'img/Back.jpg',
            currentText: '',
        }
    }

    handleClick = e => {
        let newSource = '';
        let newText = '';
        if (this.state.currentImg === 'img/Back.jpg') {
            newSource = this.props.imageSource;
            newText = this.props.cardName;
            this.setState({
                currentImg: newSource,
                currentText: newText,
            });
        }
    }

    render() {
        return (
            <div className="position">
                <div className='card-border'>
                    <img 
                        src={this.state.currentImg} 
                        className="card-image card-back" 
                        onClick={this.handleClick}
                    />
                </div>
                <h3 className='label'>{this.props.positionName}</h3>
                <h4>{this.state.currentText}</h4>
            </div>
        )
    }
}

export default Position