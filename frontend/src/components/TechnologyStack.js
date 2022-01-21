import React from "react";
import "../css/TechnologyStack.css";
import react from "../css/react.png";
import django from "../css/django.png";
import postman from "../css/postman.png";
import htmlcss from "../css/htmlcss.png";

function TechnologyStack() {
    return (
        <div className='techStack'>
            <div className='techStack__h1Container'>
                <h1 className='text-center'>Technology Stack</h1>
            </div>
            <div className='techStack__container'>
                <div className='techStack__upLogos'>
                    <div className='react'>
                        <img className='images' src={react} alt='' />
                        <p className='ptag'>React</p>
                    </div>
                    <div className='django'>
                        <img className='images' src={django} alt='' />
                        <p className='ptag'>Django</p>
                    </div>
                    <div className='postman'>
                        <img className='images' src={postman} alt='' />
                        <p className='ptag'>Postman</p>
                    </div>
                </div>
                <div className='htmlCss'>
                    <img className='images' src={htmlcss} alt='' />
                    <p className='ptag'>HTML CSS</p>
                </div>
            </div>
        </div>
    );
}

export default TechnologyStack;
