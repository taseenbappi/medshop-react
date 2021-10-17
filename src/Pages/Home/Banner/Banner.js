import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-8 col-sm-12 justify-content-center align-items-center m-0">
                        <h1 className="text-white banner-title">Take Care of Your Health Now!</h1>
                        <h2 className="text-white">Sale up to 30% all products</h2>
                        <button className="btn btn-light mt-5 p-">Shop Now</button>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;