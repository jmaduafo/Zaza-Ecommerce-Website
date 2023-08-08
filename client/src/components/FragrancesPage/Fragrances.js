import React from 'react';
import './fragrances.css';
import zazaPerfume from '../../assets/images/zazaperfume.png';
import zazaMini from '../../assets/images/zazaminiperfume.png';
import zazaLotion from '../../assets/images/zazalotion.jpg';
import zazaCandle from '../../assets/images/zazacandle.png';

function Fragrances() {
  return (
    <div className='scents-container'>
      <div className='scent-item'>
        <img src={zazaPerfume} alt='ZazaPerfume' />
        <h1 className='scent-title'>
          Fragrance
        </h1>
      </div>
      <div className='scent-item'>
        <img src={zazaMini} alt='ZazaMiniPerfume' />
        <h1 className='scent-title'>
          Petite Fragrance
        </h1>
      </div>
      <div className='scent-item'>
        <img src={zazaLotion} alt='ZazaLotion' />
        <h1 className='scent-title'>
          Emollient
        </h1>
      </div>
      <div className='scent-item'>
        <img src={zazaCandle} alt='ZazaCandle' />
        <h1 className='scent-title'>
          Candles
        </h1>
      </div>
    </div>
  )
}

export default Fragrances