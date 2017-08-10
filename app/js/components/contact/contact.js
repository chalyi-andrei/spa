import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Contact extends Component {
    render() {
        return (
            <li className="class-list-item">
                <img className="class-list-image" src={this.props.image} alt="image"/>
                <div className="class-list-name">{this.props.name}</div>
            </li>
        )
    }
}

export default Contact;
