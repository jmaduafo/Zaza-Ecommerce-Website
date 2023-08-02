import React from 'react'
import './sizes-select.css'

function SizeSelect() {
  return (
    <div className='sizes'>
        <div className='each-size'>
            <p>Top:</p>
            <div className='size-list'>
                <div><p>XS</p></div>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
                <div><p>2X</p></div>
            </div>
        </div>
        <div className='each-size'>
            <p>Bottom:</p>
            <div className='size-list'>
                <div><p>XS</p></div>
                <div><p>S</p></div>
                <div><p>M</p></div>
                <div><p>L</p></div>
                <div><p>XL</p></div>
            </div>
        </div>
    </div>
  )
}

export default SizeSelect