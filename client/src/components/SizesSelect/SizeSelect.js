import React from 'react'
import './sizes-select.css'

function SizeSelect(props) {
    // const sizeObject = {};
    // console.log(props.sizeData)
    // console.log("Yes")
    // if (props) {
    //     console.log("No")
    // }

    // if (props.topSizes) {
    //     sizeObject.Top = topSizes
    // }
    // if (props.bottomSizes) {
    //     sizeObject.Bottom = bottomSizes;
    // }
    // if (props.cupSizes) {
    //     sizeObject.Cup = cupSizes
    // }
    // if (props.bandSizes) {
    //     sizeObject.Band = bandSizes
    // }

    // const sizeKeys = Object.keys(props)

    return (
        <div className='sizes'>
                <div className='each-size'>
                    <p>{props.sizeGuide}:</p>
                    <div className='size-list'>
                        {props.sizeData && props.sizeData.map(size => (
                            <div><p>{size}</p></div>
                        ))}
                    </div>

                </div>
            


            {/* <div className='each-size'>
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