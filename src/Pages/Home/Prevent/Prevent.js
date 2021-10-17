import React from 'react';
import './Prevent.css';

const Prevent = (props) => {
    const { name, image, description } = props.prevention;
    return (
        <div className="col">
            <div className="card card-style">
                <img src={image} className="card-img-top prevent-img" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Prevent;