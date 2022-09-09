import React from "react";
import Logo from "./img/Rectangle 90.png"
import CardCSS from "./CardCSS.css"


function Card (props){
    const btmProm = props.btm;
    return (
        <div className="card">
            <div className="card_header">
                <img src={Logo} className="header_card_img" alt="Logo" />
                <div className="header_card_text">
                    <h2>Alexis Hightower</h2>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <section className="card_body">
                <div className="btms_header">
                    <button className="header_btm">Email</button>
                    <button className="header_btm">LinkedIn</button>
                </div>
                <h2>About</h2>
                <p> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to lean.</p>
                <h2>Interest</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
            <div className="footer_btms">
                <button className="btm_footer">
                    <img src="./img/Twitter Icon.svg" />
                </button>
                <button className="btm_footer">f</button>
                <button className="btm_footer">i</button>
                <button className="btm_footer">g</button>
            </div>
        </div> 
    )
}

export default Card;