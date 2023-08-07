import React from 'react';
import './Sleep-wear.css';
import sleepWearImg from '../../assets/images/sleepwearimg.jpg';
import whiteLingerie from '../../assets/images/whitelingerie.jpg';
import { Link } from 'react-router-dom'

function SleepWear() {
    return (
        <div className='sleepwear-wrapper'>
            <img src={sleepWearImg} alt="sleepwearimg" className="sleepwearimg"/>
            <img src={whiteLingerie} alt="lingerieimg" className="whitelingerieimg"/>
            <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='bras-pannies'>
                <Link to='/lingerie/Bras & Panties'><button>Bras & Panties</button></Link>
            </div>
        </div>
        
    )
}

export default SleepWear