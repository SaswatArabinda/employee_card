import React, { Component } from "react";
import Star from './star';
import '../css/star.css';

class StarRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: 0
        }
        this.changeValue = this.changeValue.bind(this)
    }
    changeValue(starsSelected) {
        this.setState({ starsSelected })
        this.props.setBG(starsSelected);
    }
    render() {
        const { totalStars, setBG } = this.props
        const { starsSelected } = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => (
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => this.changeValue(i + 1)}
                    />)
                )}
                <p>{starsSelected} of {totalStars} starssss</p>
            </div>
        )
    }
}

StarRating.defaultProps = {
    totalStars: 5
}

export default StarRating;