import React, { Component } from "react";
import CardTemplateOne from './cardTemplateOne';
// import CardTemplateTwo from './cardTemplateTwo';
import '../css/cardImage.css';


class CardImage extends Component {
	render() {
		// const {key} = this.props;
		return (
			<div className="container">
				{/* <h2>Card Image</h2> */}
				{/* <p>Image at the top (card-img-top):</p> */}
				<CardTemplateOne {...this.props} />
				<br />
				{/* <p>Image at the bottom (card-img-bottom):</p>
                <CardTemplateTwo {...this.props}/> */}
			</div>);
	}
}

export default CardImage; 