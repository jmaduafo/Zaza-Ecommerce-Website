import React from 'react';
import './home-page.css';
import swimwearSet from '../../assets/images/swimwearset.jpeg';
import bansSet from '../../assets/images/braandpanniesset.jpeg';
import lingerieSet from '../../assets/images/lingerieset.jpeg';

export default function HomePage() {
    return (
        <div className="homepage-wrapper">

            <div className="border-with-icons">
                <i className="icon icon1">Icon 1</i>
                <i className="icon icon2">Icon 2</i>
                <i className="icon icon3">Icon 3</i>
            </div>


            <div className="fasionsets-container">
                <div className="fashion-item">
                    <img src={swimwearSet} alt="SwimwearSet" />
                    <h3 className="image-title">
                        Swimwear Set
                    </h3>
                </div>
                <div className="fashion-item">
                    <img src={bansSet} alt="SleepwearSet" />
                    <h3 className="image-title">
                        Bra & Panties Set
                    </h3>
                </div>
                <div className="fashion-item">
                    <img src={lingerieSet} alt="lingerieset" />
                    <h3 className="image-title" >
                        Lingerie Set
                    </h3>
                </div>
            </div>
        </div>

    );
}