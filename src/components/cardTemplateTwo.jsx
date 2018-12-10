import React, { Component } from "react";

class CardTemplateOne extends Component {
    render() {
        const { body, email, name } = this.props;
        return (
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{body}</p>
                    <p className="card-text">Email: {email}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
                <img className="card-img-bottom" src="https://picsum.photos/200/?random" alt="Profile thumbnail" style={{ width: '100%' }} />
            </div>
        );
    }
}

export default CardTemplateOne;