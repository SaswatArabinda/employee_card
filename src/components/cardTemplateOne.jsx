import React, { Component } from "react";
import StarRating from './starRating';

const colorsForRatings = ["bg-light", "bg-warning", "bg-info", "bg-danger", "bg-success"];


class CardTemplateOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: 0,
            bgClass: ''
        }
        this.setBG = this.setBG.bind(this)
    }
    setBG(starsSelected) {
        let bgClass = ''
        switch (starsSelected) {
            case 1:
                bgClass = colorsForRatings[0] ? colorsForRatings[0] : ''
                break
            case 2:
                bgClass = colorsForRatings[1] ? colorsForRatings[1] : ''
                break
            case 3:
                bgClass = colorsForRatings[2] ? colorsForRatings[2] : ''
                break
            case 4:
                bgClass = colorsForRatings[3] ? colorsForRatings[3] : ''
                break
            case 5:
                bgClass = colorsForRatings[4] ? colorsForRatings[4] : ''
                break

            default:
                bgClass = colorsForRatings[5] ? colorsForRatings[5] : ''
                break
        }

        this.setState({
            bgClass: bgClass
        })
    }
    render() {
        const { body, email, id, name, colorsForRatings } = this.props
        let { bgClass } = this.state

        // const imgUrlSrc1 = `https://loremflickr.com/320/240?random=${id}`
        const imgUrlSrc2 = `https://picsum.photos/320/240/?image=${id}`

        return (
            <div className={`card ${bgClass}`} id={id} style={{ width: '400px' }}>
                <img className="card-img-top" src={imgUrlSrc2} alt="Profile thumbnail" style={{ width: '100%' }} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{body}</p>
                    <p className="card-text">Email: {email}</p>
                    <StarRating setBG={this.setBG} colorsForRatings={colorsForRatings} starsSelected={this.state.starsSelected} />
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        );
    }
}

CardTemplateOne.defaultProps = {
    colorsForRatings: colorsForRatings
}
export default CardTemplateOne;