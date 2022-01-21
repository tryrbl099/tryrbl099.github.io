import React from "react";
import "../css/Home.css";
import image from "../css/Graphicbanner.jpg";
import video from "../css/Mangandakita.mp4";

function Home() {
    return (
        <div className='home'>
            <div className='home__imageContainer'>
                <img className='actualImage' src={image} alt='' />
            </div>
            <div className='home__videoContainer'>
                <video className='home__video' controls>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
            <div className='home__about'>
                <h1>About Us</h1>
                <p>
                    Mangan da Kita is one the booming food businesses in the
                    city, acting as key player in the <br /> field. Located in
                    the heart of the city, this al fresco food hub specializes
                    on authentic Filipino <br /> cuisine found mostly in the
                    different provinces and municipalities of Northeastern
                    Mindanao.
                </p>
            </div>
        </div>
    );
}

export default Home;
