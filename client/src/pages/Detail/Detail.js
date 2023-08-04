import React from 'react'
import './detail.css'

import SizeSelect from '../../components/SizesSelect/SizeSelect'
import Counter from '../../components/Counter/Counter'

function Detail() {
  return (
    <div className='detail-container'>
        <div className='detail-content'>
            <div className='detail-images'>
                <div className='detail-overview-images'>
                    <div>
                        <img src='' alt=''/>
                    </div>
                    <div>
                        <img src='' alt=''/>
                    </div>
                </div>
                <div className='detail-main-image' >
                </div>
            </div>
            <div className='detail-info'>
                <div className='names-favorite'>
                    <div>
                        <p>Slips</p>
                        <h4>Winter Fall Silk Slip</h4>
                    </div>
                    <i class='bx bx-heart bx-md' ></i>
                </div>
                <div className='names-favorite'>
                    <p>$45</p>
                </div>
                <div>
                    <Counter counter='1'/>
                </div>
                <p>Size Guide</p>
                <div>
                    <SizeSelect/>
                </div>
                <div className='add-to-bag'>
                    <h4>+ Add to Bag</h4>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Detail