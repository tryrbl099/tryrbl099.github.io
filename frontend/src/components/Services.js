import React from "react";
import "../css/Services.css";
import banner from "../css/Graphicbanner.jpg";

function Services() {
    return (
        <div className='services'>
            <div className='services__pictureContainer'>
                <img src={banner} alt='' />
            </div>
            <div className='services__h1Container'>
                <h1>Services</h1>
                <p>
                    The food, once ready, can either be <br />
                    picked-up in a designated area in the business’ <br />{" "}
                    vicinity or delivered door-to-door.{" "}
                </p>
            </div>
        </div>
    );
}

export default Services;
