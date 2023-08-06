import React from 'react'
import './sizes-select.css'

function SizeSelect(item) {
    const sizeObject = {};

    if (item.topSizes) {
        sizeObject.Top = topSizes
    }
    if (item.bottomSizes) {
        sizeObject.Bottom = bottomSizes;
    }
    if (item.cupSizes) {
        sizeObject.Cup = cupSizes
    }
    if (item.bandSizes) {
        sizeObject.Band = bandSizes
    }

    const sizeKeys = Object.keys(sizeObject)

    return (
        <div className='sizes'>
            {sizeKeys.map(key => (
                <div className='each-size'>
                    <p>{key}:</p>
                    <div className='size-list'>
                        {sizeObject.key.map(size => (
                            <div><p>{size}</p></div>
                        ))}
                    </div>

                </div>
            ))}

{/* 
            <div className='each-size'>
                <p>Bottom:</p>
                <div className='size-list'>
                    <div><p>XS</p></div>
                    <div><p>S</p></div>
                    <div><p>M</p></div>
                    <div><p>L</p></div>
                    <div><p>XL</p></div>
                </div>
            </div> */}
        </div>
    )
}

export default SizeSelect