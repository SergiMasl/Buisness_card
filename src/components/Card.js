import React from "react";
import HeaderCard from './HeaderCard';
import BodyCard from './BodyCard';
import FooterCard from './FooterCard';

function Card (){
    return (
        <div className="card">
        
        <HeaderCard />
        <BodyCard />
        <FooterCard />
        </div> 
    )
}

export default Card;