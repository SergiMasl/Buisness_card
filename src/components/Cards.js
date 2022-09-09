import React from "react";
import Card from "./Card";


function Cards (){
    return (

        <div className="cards">
            <div className="card_contener card_contener_dark">
                <Card btm="two" />
            </div>
            <div className="card_contener card_contener_dark">
                <Card btm="one" />
            </div>
            <div className="card_contener card_contener_grey">
                <Card btm="two" />
            </div>
            <div className="card_contener card_contener_grey">
                <Card  btm="one" />
            </div>
        </div> 
    )
}

export default Cards;