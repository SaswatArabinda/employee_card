import React from "react";

const Star = ({ selected = false, onClick = (f) => f }) => {
    return (
        <span className={(selected) ? "fa fa-star checked" : 'fa fa-star'} onClick={onClick} ></span>
    )
}

export default Star;