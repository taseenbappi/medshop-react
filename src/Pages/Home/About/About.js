import React from 'react';
import './About.css';
import kit from '../../../images/Banner&Background/kit.png';
import weve from '../../../images/Banner&Background/waves.png';

const About = () => {
    return (
        <div className="about-container py-5 container-fluid">
            <div>
                <span className="p-3">
                    <img src={weve} alt="" />
                </span>
                <span>ABOUT US</span>
                <span className="p-3">
                    <img src={weve} alt="" />
                </span>
            </div>
            <div className="row p-5 align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                    <img className="kit-img img-fluid" src={kit} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start p-2">
                    <h1 >Medical Equipment & Kit</h1>
                    <p>Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review. Even if you can't afford to travel the world, you can take your children to the museum, zoo or local park. And don't be afraid to take them to grown-up spots. Eating out in a restaurant teaches children how to be quiet and polite and gives them the pleasure of knowing you trust them to behave.</p>
                </div>
            </div>


        </div>
    );
};

export default About;