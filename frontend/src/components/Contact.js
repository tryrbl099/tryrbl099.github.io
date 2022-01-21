import React from "react";
import "../css/Contact.css";
import map from "../css/maps.PNG";
import telephone from "../css/teleIcon.png";
import message from "../css/message.png";

function Contact() {
    return (
        <div className='contact'>
            <div className='contact__container'>
                <h1>Contact Us</h1>
                <img src={map} alt='' />
                <h3>Mangan da Kita</h3>
                <p>3rd floor SM Lanang premiere</p>
                <div className='info1'>
                    <img className='tele' src={telephone} alt='' />
                    <div>
                        <small>09992394324</small> <br />
                        <small>999-(999)-999</small>
                    </div>
                </div>
                <div className='info2'>
                    <img className='tele' src={message} alt='' />
                    <div>
                        <small>Mdk@gmail.com</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
