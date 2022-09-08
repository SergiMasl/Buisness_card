import React from "react";
import CardCSS from "./CardCSS.css"

export default function HeaderCard (){
    return (
        <div className="card_header">
            <img src="./Rectangle 90.png" className="header_card_img" alt="Logo" />
            <div className="header_card_text">
                <h2>Alexis Hightower</h2>
                <p>Frontend Developer</p>
            </div>
        </div>
    )
}

