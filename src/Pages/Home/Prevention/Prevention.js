import React from 'react';
import './Prevention.css';
import wave from "../../../images/Banner&Background/waves.png"
import usePrevention from '../../../Hooks/usePrevention/usePrevention';
import Prevent from '../Prevent/Prevent';

const Prevention = () => {
    const [prevents] = usePrevention();
    console.log(prevents);


    return (
        <div className="py-5 bg-light">
            <div className='py-5'>
                <span>
                    <img src={wave} alt="" className='p-2' />
                </span>
                <span>
                    PREVENTION
                </span>
                <span>
                    <img src={wave} alt="" className='p-2' />
                </span>
            </div>
            <div>
                <h1 className="prevent-title">How to Prevent Yourself</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
                    Aenean
                    ligula eget dolor. Aenean massa.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto bg-light">
                {
                    prevents.map(prevention => <Prevent
                        key={prevention.id}
                        prevention={prevention}
                    >
                    </Prevent>)
                }

            </div>
        </div>
    );
};

export default Prevention;